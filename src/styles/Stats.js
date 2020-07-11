import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 3px;

	display: flex;
	flex-direction: row;

	&:hover {
		box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
	}
	@media only screen and (max-width: 425px) {
		flex-wrap: wrap;
	}
`;

export const Item = styled.div`
	width: 20%;
	display: flex;
	flex-direction: row;
	padding-left: 1%;
	padding-right: 1%;
	padding-top: 2%;
	padding-bottom: 2%;

	&:hover {
		cursor: pointer;
		background-color: #f5f5f5;
	}

	&:nth-last-child(1):hover {
		cursor: inherit;
		background-color: inherit;
	}

	@media only screen and (max-width: 425px) {
		width: 50%;
		padding-left: 3%;
		padding-right: 3%;
		&:nth-last-child(1) {
			width: 100%;
		}
	}
`;

export const Icon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > img {
		height: 3.5em;
	}
`;

export const Data = styled.div`
	margin-left: 5%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
`;

export const Numbers = styled.div`
	font-family: ${(props) => props.theme.fonts.primary};
	font-size: 3rem;

	& > span {
		font-size: 1rem;
	}
`;

export const Legend = styled.div`
	font-family: ${(props) => props.theme.fonts.primary};
	font-size: 0.8rem;
`;

export const Button = styled.button`
	margin-left: auto;
	justify-self: flex-end;
	align-self: center;
	width: 85%;
	padding: 4%;
	font-family: ${(props) => props.theme.fonts.primary};
	font-size: 1.2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 3px;
	background-color: ${(props) => props.theme.colors.secondary};
	color: ${(props) => props.theme.colors.white};
	border: none;
	outline: none;

	& span {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	& img {
		height: 1em;
	}
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.darkorange};
	}

	@media only screen and (max-width: 425px) {
		width: 60%;
		margin-right: auto;
	}
`;
