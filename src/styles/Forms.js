import styled, { css } from 'styled-components';

export const Container = styled.div`
	margin-top: 1.5em;
	border-radius: 0.2em;
	background-color: ${(props) => props.theme.colors.white};
	padding: 2%;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10%;
	padding-right: 10%;
	border-right: 1px solid #dfe4ef;
	& > h1 {
		font-family: ${(props) => props.theme.fonts.primary};
	}

	& > p {
		margin-top: 2em;
		font-family: ${(props) => props.theme.fonts.primary};
	}

	& > img {
		margin-top: 2em;
		height: 10em;
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	padding-left: 10%;
	padding-right: 10%;

	& > span {
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 1.5rem;
		margin-top: 1em;
	}

	& > input,
	& > textarea {
		margin-top: 0.5em;
		font-size: 1.5rem;
		padding: 2%;
		border-radius: 0.2em;
		border: 1px solid #dfe4ef;
		background: none;
		font-family: ${(props) => props.theme.fonts.primary};
	}

	& > textarea {
		height: 8em;
	}

	& > div {
		margin-top: 1.5em;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
`;

export const Button = styled.button`
	margin-left: 1.5em;
	font-family: ${(props) => props.theme.fonts.primary};
	font-size: 1.5rem;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 2%;
	padding-bottom: 2%;
	border: none;
	border-radius: 0.2em;
	&:hover {
		cursor: pointer;
	}
	${(props) =>
		props.active
			? css`
					background-color: ${(props) => props.theme.colors.secondary};
					color: ${(props) => props.theme.colors.white};
			  `
			: css`
					background-color: #dfe4ef;
			  `}
`;

export const Errors = styled.div`
	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.danger};
`;
