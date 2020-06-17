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

	& > span:last-child {
		padding-left: 0;
	}

	&:hover {
		cursor: pointer;
		background-color: #f2f4f8;
	}
`;

export const CatalogContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const CatalogRingDetails = styled.div`
	height: 200;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	& > div {
		font-family: ${(props) => props.theme.fonts.primary};
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		& > div {
			height: 0.7em;
			width: 0.7em;
			background-color: ${(props) => props.theme.colors.secondary};
			margin-right: 1em;
		}
	}

	& > h2 {
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 5rem;
	}

	& > p {
		font-family: ${(props) => props.theme.fonts.primary};
	}
`;

export const LegendContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	& > span {
		width: 50%;
		padding: 5%;
		display: flex;
		flex-direction: row;
		align-items: center;
		& > div {
			height: 1em;
			width: 1em;
			margin-right: 1em;
		}
	}

	& > span:nth-child(1) {
		& > div {
			background-color: ${(props) => props.colors[0]};
		}
	}
	& > span:nth-child(2) {
		& > div {
			background-color: ${(props) => props.colors[1]};
		}
	}
	& > span:nth-child(3) {
		& > div {
			background-color: ${(props) => props.colors[2]};
		}
	}
	& > span:nth-child(4) {
		& > div {
			background-color: ${(props) => props.colors[3]};
		}
	}
`;

export const ReportContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #f2f4f8;
	padding-top: 1em;
	padding-bottom: 1em;
	padding-left: 3%;
	padding-right: 3%;
	&:hover {
		cursor: pointer;
		background-color: #f2f4f8;
	}
	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		min-height: 3em;
		& > img {
			height: 3em;
		}

		& > span {
			font-family: ${(props) => props.theme.fonts.primary};
		}
	}
`;

export const UpdateContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 1em;
	padding-bottom: 1em;
	padding-left: 2%;
	padding-right: 2%;
	border-bottom: 1px solid #f2f4f8;
	&:hover {
		cursor: pointer;
		background-color: #f2f4f8;
	}

	& > span:nth-child(1) {
		font-weight: 500;
		font-family: ${(props) => props.theme.fonts.primary};
	}

	& > span:nth-child(2) {
		font-family: ${(props) => props.theme.fonts.primary};
		margin-top: 0.5em;
	}
`;
