import styled from 'styled-components';

export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Project = styled.div`
	margin-top: 2em;
	width: 100%;
	display: grid;
	grid-template-columns: 10% 35% 15% 15% 15% 10%;
	background-color: ${(props) => props.theme.colors.white};
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
		}

		& > span {
			font-size: 1.2rem;
			font-family: ${(props) => props.theme.fonts.primary};
		}
	}
`;
