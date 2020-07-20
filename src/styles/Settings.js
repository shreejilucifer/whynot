import styled, { css } from 'styled-components';

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
	font-family: ${(props) => props.theme.fonts.primary};
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

export const Title = styled.div`
	& > span,
	& a {
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.primary};
	}
	& > span {
		font-size: 19px;
		font-weight: 600;
	}
	margin-bottom: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	& a {
		text-decoration: none;
		background-color: ${(props) => props.theme.colors.orange};
		color: ${(props) => props.theme.colors.white};
		&:hover {
			background-color: ${(props) => props.theme.colors.darkorange};
		}
		padding-top: 9px;
		padding-bottom: 9px;
		padding-left: 18px;
		padding-right: 18px;
		border-radius: 3px;
		display: flex;
		flex-direction: row;
		align-items: center;
		& > img {
			height: 15px;
			width: 15px;
		}
	}
`;

export const ShowCaseInvite = styled.div`
	padding-top: 20px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > img {
		width: 20%;
		opacity: 0.2;
	}

	& > h2,
	& > p,
	& a {
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.primary};
	}

	& > h2 {
		font-weight: 500px;
		margin-bottom: 10px;
	}

	& > p {
		margin-bottom: 10px;
		opacity: 0.8;
	}

	& a {
		border: 1px solid ${(props) => props.theme.colors.tertiary};
		padding-left: 18px;
		padding-right: 18px;
		padding-top: 9px;
		padding-bottom: 9px;
		border-radius: 3px;
		text-decoration: none;
		&:hover {
			background-color: rgba(0, 0, 0, 0.04);
		}
	}
`;

export const Invite = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	& > section {
		display: flex;
		flex-direction: column;
		margin-bottom: 40px;
		& > label {
			font-family: ${(props) => props.theme.fonts.primary};
			font-weight: 600;
			font-size: 13px;
			margin-bottom: 5px;
		}

		& > input {
			border-radius: 3px;
			border: 1px solid ${(props) => props.theme.colors.tertiary};
			height: 40px;
			padding-left: 10px;
			font-size: 15px;
		}
	}

	& > button {
		width: 25%;
		padding-top: 9px;
		padding-bottom: 9px;
		background-color: ${(props) => props.theme.colors.orange};
		color: ${(props) => props.theme.colors.white};
		font-family: ${(props) => props.theme.fonts.primary};
		border: none;
		border-radius: 3px;
		font-size: 17px;
		&:hover {
			background-color: ${(props) => props.theme.colors.darkorange};
			cursor: pointer;
		}
	}
`;

export const InviteOption = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
	border-radius: 3px;
	${(props) =>
		props.checked
			? css`
					border: 1px solid ${(props) => props.theme.colors.orange};
			  `
			: css`
					border: 1px solid rgba(0, 0, 0, 0.2);
			  `}
	padding: 20px;
	& > input {
		margin-right: 20px;
	}

	& > span {
		display: flex;
		flex-direction: column;
		font-family: ${(props) => props.theme.fonts.primary};

		& > p {
			font-size: 14px;
			color: rgba(0, 0, 0, 0.5);
		}
	}
`;

export const Billing = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	padding-top: 50px;
	padding-bottom: 40px;
	margin-bottom: 40px;
	border-bottom: 1px solid ${(props) => props.theme.colors.gray};
	& > div {
		& > h3 {
			font-family: ${(props) => props.theme.fonts.primary};
			color: ${(props) => props.theme.colors.primary};
			font-weight: 600;
			font-size: 16px;
			margin-bottom: 10px;
		}

		& > p {
			font-family: ${(props) => props.theme.fonts.primary};
			color: ${(props) => props.theme.colors.primary};
			display: flex;
			flex-direction: column;
			margin-bottom: 10px;
			& > span {
				margin-top: 5px;
				font-size: 14px;
			}
			& > span:first-child {
				font-weight: 600;
			}
		}

		& > p:last-child {
			opacity: 0.5;
			font-size: 14px;
		}
	}
`;
