import styled from 'styled-components';
import { Container } from './CommonStyles';

export const PricingContainer = styled(Container)`
	padding-top: 120px;
`;

export const Title = styled.h1`
	text-align: center;
	font-family: ${(props) => props.theme.fonts.landing};
	font-weight: 400;
	font-size: 40px;
`;

export const Pricing = () => {
	return (
		<PricingContainer>
			<Title>Pricing</Title>
		</PricingContainer>
	);
};
