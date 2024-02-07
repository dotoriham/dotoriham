module.exports = {
  prompt: ({ prompter, args, h }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'componentName',
        message: '컴포넌트 이름을 입력해주세요.',
      })

      .then(({ componentName }) => {
        if (!componentName)
          throw new Error(
            'componentName 값이 비어있습니다. componentName 의 값을 입력해주세요',
          );

        return {
          componentName,
          PascalCaseComponentName: h.changeCase.pascalCase(componentName),
          args,
        };
      }),
};
