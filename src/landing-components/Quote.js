import styled from 'styled-components';
import { Container } from './CommonStyles';

export const QuoteContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.black};
	padding-top: 100px;
	padding-bottom: 100px;
`;

export const QuoteTitle = styled.h2`
	font-family: ${(props) => props.theme.fonts.landing};
	font-weight: 500;
	text-align: center;
	font-size: 28px;
	color: rgba(0, 0, 0, 1);
`;

export const QuoteSubtitle = styled.h3`
	margin-top: 18px;
	width: 80%;
	text-align: center;
	color: rgba(0, 0, 0, 0.6);
	font-weight: 400;
	line-height: 30px;
`;

export const Quote = () => {
	return (
		<QuoteContainer>
			<QuoteTitle>We believe in securing the digital ecosystem</QuoteTitle>
			<QuoteSubtitle>
				"Security in projects are like oil super-tankers, when steering them
				they need small incremental changes early in order to avoid last-minute
				radical changes that result in a wreck." <br /> <br />
				<span>
					- Kevin Pietersma, Information Security Architect, University of
					Toronto
				</span>
			</QuoteSubtitle>
		</QuoteContainer>
	);
};
