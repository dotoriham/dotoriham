import { DefaultProps } from '@dotoriham/styles';

// TODO 추상화 해야함
export interface LoadingProps extends DefaultProps {}

export const Loading = ({ ...rest }: LoadingProps) => {
	return (
		<svg
			width="calc(2.25rem / 2)"
			height="calc(2.25rem / 2)"
			viewBox="0 0 38 38"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#fff"
			role="presentation"
			{...rest}>
			<g fill="none" fill-rule="evenodd">
				<g transform="translate(2.5 2.5)" stroke-width="5">
					<circle stroke-opacity=".5" cx="16" cy="16" r="16"></circle>
					<path d="M32 16c0-9.94-8.06-16-16-16">
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 16 16"
							to="360 16 16"
							dur="1s"
							repeatCount="indefinite"></animateTransform>
					</path>
				</g>
			</g>
		</svg>
	);
};
