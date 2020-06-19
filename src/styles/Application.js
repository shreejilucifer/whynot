import styled, { css } from 'styled-components';

export const Container = styled.div`
	margin-top: 1.5em;
	background-color: ${(props) => props.theme.colors.white};
	padding-top: 0.01em;
	padding-bottom: 1em;
	padding-left: 2%;
	padding-right: 2%;
`;

export const Stat = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	min-height: 6em;

	& > img {
		width: 4em;
		margin-right: 5%;
	}

	& > p {
		min-height: 6em;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: ${(props) => props.theme.fonts.primary};
		& > span:first-child {
			font-size: 1.5rem;
		}

		& > a {
			font-size: 1.2rem;
			text-decoration: none;
			${(props) => props.theme.colors.secondary};
		}

		&:last-child {
			font-size: 1rem;
		}

		& > button {
			background-color: ${(props) => props.theme.colors.secondary};
			width: 90%;
			font-size: 1rem;
			font-family: ${(props) => props.theme.fonts.primary};
			font-weight: 500;
			color: ${(props) => props.theme.colors.white};
			padding-top: 1em;
			padding-bottom: 1em;
			margin: auto;
			border-radius: 0.2em;
			border: none;
			outline: none;
			&:hover {
				cursor: pointer;
			}
		}

		& > img {
			height: 2em;
			margin: auto;
			&:hover {
				cursor: pointer;
			}
		}
	}
`;

export const ErrorItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.color};
	height: 6em;
	& > span:first-child {
		${(props) =>
			props.dark
				? css`
						color: ${(props) => props.theme.colors.primary};
				  `
				: css`
						color: ${(props) => props.theme.colors.white};
				  `} 
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 2.5rem;
	}

	& > span:last-child {
		margin-top: 0.5em;
		${(props) =>
			props.dark
				? css`
						color: ${(props) => props.theme.colors.primary};
				  `
				: css`
						color: ${(props) => props.theme.colors.white};
				  `} 
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 1.2rem;
	}
`;
