import styled from 'styled-components';

export const Layout = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
`;

export const Content = styled.div`
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 1em;
	padding-bottom: 1em;
`;
