import { palette } from '../theme/colors';

export default {
	title: 'Colors',
};

const Template = () => {
	const paletteArray = Object.entries(palette);

	return (
		<div
			style={{
				display: 'flex',
			}}>
			{paletteArray.map(([color, values]) => (
				<div
					style={{
						marginRight: '20px',
					}}>
					{Object.entries(values).map(([num, value]) => (
						<div
							style={{
								backgroundColor: value,
								color: 'white',
								height: '30px',
								width: '100px',
							}}>
							{color}_{num}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export const Colors = Template.bind({});
