import path from 'node:path';
import glob from 'fast-glob';
import fs from 'fs-extra';
import { generateScopedName } from 'hash-css-selector';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';
import { getPath } from '../utils/get-path';

function transformFileName(filePath: string) {
  return path.basename(filePath).replace('.module.css', '.css');
}

async function processFile(
  filePath: string,
  scopeBehaviour: 'local' | 'global',
  outputFolder: string,
) {
  const result = await postcss([
    // postcssPresetMantine,
    postcssModules({ generateScopedName, getJSON: () => {}, scopeBehaviour }),
  ]).process(fs.readFileSync(filePath, 'utf-8'), {
    from: path.basename(filePath),
  });

  const fileName = transformFileName(filePath);
  await fs.writeFile(path.join(outputFolder, fileName), result.css);
  await fs.writeFile(
    path.join(outputFolder, fileName.replace('.css', '.layer.css')),
    `@layer dotoriham {${result.css}}`,
  );
}

// Generates styles.layers.css files for each @dotoriham/* component
async function generateCSSLayers() {
  const packagesPath = glob.convertPathToPattern(getPath('packages'));
  const files = await glob(`${packagesPath}/*/*/styles.css`);

  files.forEach((filePath) => {
    const directory = path.normalize(path.join(filePath, '..'));
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileContentWitLayer = `@layer dotoriham {${fileContent}}`;
    fs.writeFileSync(
      path.join(directory, 'styles.layer.css'),
      fileContentWitLayer,
    );
  });
}

// Generates individual css files for each @dotoriham/ui component
export async function generateCoreCSS() {
  const packagesPath = glob.convertPathToPattern(getPath('packages'));
  const files = await glob(`${packagesPath}/ui/src/**/*.css`);
  const modules = files.filter((file) => file.endsWith('.module.css'));
  const global = files.find((file) => file.endsWith('global.css'))!;

  const outputFolder = getPath('packages/ui/styles');

  await fs.ensureDir(outputFolder);

  modules.forEach((file) => processFile(file, 'local', outputFolder));
  processFile(global, 'global', outputFolder);
}

export async function generateCSS() {
  await generateCSSLayers();
  await generateCoreCSS();
}
