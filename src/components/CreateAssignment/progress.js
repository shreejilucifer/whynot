import { ProgressBar, Step } from 'react-step-progress-bar';
import styled, { css } from 'styled-components';

const Container = styled.div`
	margin-top: 20px;
	margin-bottom: 70px;
	padding-left: 5%;
	padding-right: 5%;
`;

const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > p {
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 13px;
		text-align: center;
		position: absolute;
		left: 0;
		bottom: 0;
		transform: translateY(130%) translateX(-25%);
		width: 200%;
	}

	& > div {
		background-color: lightgray;
		border-radius: 50%;
		height: 60px;
		width: 60px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		& > img {
			height: 40px;
			width: 40px;
		}
		${(props) =>
			!props.active &&
			css`
				& > img {
					opacity: 0.2;
				}
			`}
	}
	${(props) =>
		!props.active &&
		css`
			& > p {
				opacity: 0.2;
			}
		`}
`;

export default function Progress({ percent }) {
	return (
		<Container>
			<ProgressBar
				filledBackground="linear-gradient(to right, #ff5722, #ff4722)"
				percent={percent}
			>
				<Step transition="skew">
					{({ accomplished, index }) => (
						<IconContainer active={accomplished}>
							<div>
								<img src="/img/play-button.svg" />
							</div>
							<p>Start</p>
						</IconContainer>
					)}
				</Step>
				<Step transition="skew">
					{({ accomplished, index }) => (
						<IconContainer active={accomplished}>
							<div>
								<img src="/img/crosshair.svg" />
							</div>
							<p>Define Scope</p>
						</IconContainer>
					)}
				</Step>
				<Step transition="skew">
					{({ accomplished, index }) => (
						<IconContainer active={accomplished}>
							<div>
								<img src="/img/invoice-1.svg" />
							</div>
							<p>Get a Quote</p>
						</IconContainer>
					)}
				</Step>
				<Step transition="skew">
					{({ accomplished, index }) => (
						<IconContainer active={accomplished}>
							<div>
								<img src="/img/plus-1.svg" />
							</div>
							<p>Schedule</p>
						</IconContainer>
					)}
				</Step>
				<Step transition="skew">
					{({ accomplished, index }) => (
						<IconContainer active={accomplished}>
							<div>
								<img src="/img/correct.svg" />
							</div>
							<p>Completion</p>
						</IconContainer>
					)}
				</Step>
			</ProgressBar>
		</Container>
	);
}
