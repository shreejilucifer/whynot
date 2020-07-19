import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 3px;
	border: 1px solid #dfe4ef;
	padding: 30px;
`;

export const SubTitle = styled.p`
	margin-top: 5px;
	color: ${(props) => props.theme.colors.primary};
	opacity: 0.5;
`;

export const About = styled.div`
	padding-bottom: 50px;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray};
	display: flex;
	flex-direction: column;

	& > h2,
	& > p {
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.primary};
	}

	& > h2 {
		font-size: 19px;
		font-weight: 600;
	}

	& > p:nth-child(1) {
		margin-top: 10px;
	}

	& > p:last-child {
		margin-top: 40px;

		& > b {
			font-weight: 600;
		}
	}
`;

export const TimeZone = styled.div`
	padding-top: 30px;
	padding-bottom: 50px;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray};
	& > h2,
	& select,
	& button {
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.primary};
	}

	& > h2 {
		font-size: 19px;
		font-weight: 600;
	}

	& > span {
		& > select {
			margin-top: 40px;
			width: 40%;
			height: 35px;
			border: 1px solid ${(props) => props.theme.colors.tertiary};
			border-radius: 3px;
			padding-left: 10px;
			padding-right: 10px;

			&:hover {
				cursor: pointer;
			}
		}

		& > button {
			height: 35px;
			padding-left: 32px;
			padding-right: 32px;
			margin-left: 2%;
			background-color: white;
			border-radius: 3px;
			border: 1px solid ${(props) => props.theme.colors.orange};

			&:hover {
				cursor: pointer;
				background-color: rgba(0, 0, 0, 0.04);
			}
		}
	}
`;

export const Password = styled.div`
	padding-top: 30px;
	padding-bottom: 50px;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray};
	display: flex;
	flex-direction: column;

	& > h2,
	& p,
	& button {
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.primary};
	}

	& > h2 {
		font-size: 19px;
		font-weight: 600;
	}

	& > p:nth-child(1) {
		margin-top: 10px;
	}

	& > div {
		display: flex;
		flex-direction: row;

		margin-top: 30px;

		& > span {
			display: flex;
			flex-direction: column;
			width: 25%;
			margin-right: 2%;
			& > p {
				font-weight: 600;
				font-size: 13px;
				margin-bottom: 5px;
			}

			& > input {
				border-radius: 3px;
				border: 1px solid ${(props) => props.theme.colors.tertiary};
				height: 35px;
				padding-left: 10px;
				font-size: 15px;
			}
		}

		& > button {
			margin-top: auto;
			height: 35px;
			padding-left: 32px;
			padding-right: 32px;
			border: 1px solid ${(props) => props.theme.colors.orange};
			border-radius: 3px;
			background-color: ${(props) => props.theme.colors.white};
		}
	}
`;
