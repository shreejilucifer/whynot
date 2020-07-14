import styled from 'styled-components';

export const BreadCrumbContainer = styled.div`
	display: flex;
	flex-direction: row;

	& > span {
		margin-right: 0.5em;
		font-family: ${(props) => props.theme.fonts.primary};

		&:hover {
			cursor: pointer;
		}

		&:last-child {
			color: ${(props) => props.theme.colors.secondary};
			&:hover {
				cursor: inherit;
			}
		}
	}
`;

export const Title = styled.div`
	background-color: ${(props) => props.theme.colors.white};
	padding: 2%;
	font-family: ${(props) => props.theme.fonts.primary};
	font-weight: 500;
	margin-right: 2%;
	border-radius: 0.2em;
`;

export const NewProjectBtn = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	border: none;
	background-color: ${(props) => props.theme.colors.secondary};
	border-radius: 0.2em;
	outline: none;
	&:hover {
		cursor: pointer;
	}
	& > span {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		& > img {
			height: 1.2em;
		}
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.white};
		font-weight: 500;
		font-size: 1.2rem;
	}
`;
