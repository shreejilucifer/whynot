import styled, { css } from 'styled-components';

export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 60vh;
`;

export const Project = styled.div`
	margin-top: 2em;
	width: 100%;
	display: grid;
	grid-template-columns: 10% 35% 15% 15% 15% 10%;
	${(props) =>
		props.open
			? css`
					background-color: ${(props) => props.theme.colors.secondary};
					& span {
						color: ${(props) => props.theme.colors.white};
					}
			  `
			: css`
					background-color: ${(props) => props.theme.colors.white};
			  `}
	padding-top: 2em;
	padding-bottom: 2em;

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.secondary};
		& span {
			color: ${(props) => props.theme.colors.white};
		}
	}

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;

		&:first-child {
			align-items: center;

			& img {
				height: 1em;
				width: 2em;
				${(props) =>
					props.open
						? css`
								transform: rotate(0deg);
						  `
						: css`
								transform: rotate(-90deg);
						  `}
			}
		}

		& > span {
			font-size: 1.2rem;
			font-family: ${(props) => props.theme.fonts.primary};
		}

		&:nth-child(3),
		&:nth-child(4),
		&:nth-child(5) {
			& > span:first-child {
				font-size: 2rem;
			}
			& > span:last-child {
				font-size: 0.8rem;
			}
		}
	}
`;

export const Applications = styled.div`
	background-color: ${(props) => props.theme.colors.white};
	border: 1px solid ${(props) => props.theme.colors.white};
`;

export const NewAppBtn = styled.button`
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 0.2em;
	background: none;

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.white};
	}

	& > span {
		margin-left: 1em;
		font-family: ${(props) => props.theme.fonts.primary};
	}
	justify-self: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 2em;
	margin-bottom: 2em;
	padding: 1%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
