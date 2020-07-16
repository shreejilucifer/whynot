import styled from 'styled-components';

export const CardLayout = styled.div`
	margin-left: 1%;
	margin-right: 1%;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 0.2em;
	min-height: 20em;
	border: 1px solid #dfe4ef;

	&:hover {
		box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
	}
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
	justify-content: space-between;
	align-items: center;
	font-size: 1rem;
	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.primary};
	border-bottom: 1px solid #dfe4ef;
`;

export const Icon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-left: 10px;
	border-left: 1px solid rgba(0, 0, 0, 0.2);

	& img {
		height: 2em;
		transform: translateX(-5%) translateY(7%);
	}
`;

export const Content = styled.div`
	padding-top: 2%;
	padding-right: 2%;
	padding-left: 2%;
	padding-bottom: 2%;
`;
