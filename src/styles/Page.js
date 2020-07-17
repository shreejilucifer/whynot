import styled from 'styled-components';

export const Layout = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	margin-left: auto;
	margin-right: auto;
`;

export const Content = styled.div`
	max-width: 1440px;
	min-height: 720px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 2em;
	padding-bottom: 2em;

	@media only screen and (max-width: 425px) {
		padding-left: 2%;
		padding-right: 2%;
	}
`;
