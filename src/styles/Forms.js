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
	& > h2 {
		font-family: ${(props) => props.theme.fonts.primary};
		font-weight: 600;
	}

	& > p {
		margin-top: 2em;
		font-family: ${(props) => props.theme.fonts.primary};
	}

	& > img {
		margin-top: 2em;
		height: 10em;
	}

	& > button {
		margin-top: 1em;
		background-color: ${(props) => props.theme.colors.orange};
		outline: none;
		border-radius: 3px;
		border: none;
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.white};
		font-size: 20px;
		max-width: 30%;
		padding-top: 5px;
		padding-bottom: 5px;
		&:hover {
			cursor: pointer;
		}
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	padding-left: 10%;
	padding-right: 10%;

	& > span {
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 1rem;
		margin-top: 1em;
	}

	& > input,
	& > textarea {
		margin-top: 0.5em;
		font-size: 1rem;
		padding: 2%;
		border-radius: 0.2em;
		border: 1px solid #dfe4ef;
		background: none;
		font-family: ${(props) => props.theme.fonts.primary};
	}

	& > textarea {
		min-height: 8em;
		min-width: 100%;
		max-width: 100%;
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
	font-size: 1rem;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 2%;
	padding-bottom: 2%;
	border: none;
	border-radius: 3px;
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

export const SuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 10%;
	padding-right: 10%;

	& > img {
		height: 5em;
		margin-bottom: 1.5em;
	}

	& > p {
		font-family: ${(props) => props.theme.fonts.primary};
		text-align: center;
		margin-bottom: 1.5em;
	}

	& > div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

export const SuccessBtn = styled.button`
	&:first-child {
		margin-right: 1.5em;
		background-color: ${(props) => props.theme.colors.secondary};
		color: white;
	}
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
`;

export const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	margin-bottom: 40px;
	& > input,
	& > select {
		padding: 5px;
		border-radius: 3px;
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 18px;
		border: 1px solid ${(props) => props.theme.colors.orange};
	}
	& > p {
		margin-left: 2em;
		margin-right: 2em;
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 18px;
	}
	& > select {
		margin-left: 2em;
		padding-right: 5%;
	}
`;
