import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 1em;
	padding-bottom: 1em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 5%;
	padding-right: 5%;

	& > div {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
	}
`;

export const Logo = styled.div`
	& > img {
		height: 3em;
		width: 10em;
	}
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-right: 1em;
`;

export const Copyright = styled.div`
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const Links = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	& a {
		font-family: ${(props) => props.theme.fonts.primary};
		text-decoration: none;
		color: ${(props) => props.theme.colors.black};
		margin-right: 1.5em;
	}
`;
