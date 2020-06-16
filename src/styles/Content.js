import styled from 'styled-components';

export const Table = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TableHeader = styled.div`
	min-height: 3em;
	background-color: #f2f4f8;
	display: grid;
	grid-template-columns: 20% 15% 10% 10% 10% 10% 10% 15%;
	margin-bottom: 1em;
	& > span {
		display: flex;
		flex-direction: row;
		padding-left: 5%;
		align-items: center;
		font-family: ${(props) => props.theme.fonts.primary};
	}
`;

export const TableRow = styled.div`
	display: grid;
	grid-template-columns: 20% 15% 10% 10% 10% 10% 10% 15%;
	border-bottom: 1px solid #f2f4f8;
	& > span {
		padding-left: 5%;
		padding-bottom: 1em;
		padding-top: 1em;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 0.95rem;

		& > button {
			width: 100%;
			height: 100%;
			border: none;
			border-radius: 0.2em;
			background-color: ${(props) => props.theme.colors.danger};
			color: ${(props) => props.theme.colors.white};
			font-family: ${(props) => props.theme.fonts.primary};
		}
	}

	&:hover {
		cursor: pointer;
		background-color: #f2f4f8;
	}
`;
