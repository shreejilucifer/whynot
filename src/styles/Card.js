import styled from 'styled-components';

export const CardLayout = styled.div`
	margin-left: 1%;
	margin-right: 1%;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 0.2em;
	min-height: 20em;
	@media only screen and (max-width: 425px) {
		min-height: auto;
		margin-bottom: 1em;
	}
`;

export const Title = styled.div`
	min-height: 3em;
	padding-left: 2%;
	padding-right: 2%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.2rem;
	font-family: ${(props) => props.theme.fonts.primary};
	border-bottom: 1px solid #dfe4ef;
`;

export const Content = styled.div`
	padding-top: 2%;
	padding-right: 2%;
	padding-left: 2%;
	padding-bottom: 2%;
`;
