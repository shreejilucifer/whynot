import styled from 'styled-components';
import { Container } from './CommonStyles';

export const HowItWorksContainer = styled(Container)`
	margin-top: 50px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	text-align: center;
	font-family: ${(props) => props.theme.fonts.landing};
	color: ${(props) => props.theme.colors.primary};
	font-weight: 500;
`;

export const Video = styled.iframe`
	margin-top: 50px;
	height: 500px;
	width: 100%;

	@media only screen and (max-width: 425px) {
		height: 300px;
	}
`;

export const HowItWorks = () => {
	return (
		<HowItWorksContainer>
			<Title>How it works?</Title>
			<Video src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1"></Video>
		</HowItWorksContainer>
	);
};
