import styled, { css } from 'styled-components';

export const Nav = styled.div`
	width: 100%;
	border-bottom: 1px solid #d9dbde;
	background-color: ${(props) => props.theme.colors.white};
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 85px;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 5%;
	padding-right: 5%;

	@media only screen and (max-width: 425px) {
		flex-direction: column;
		height: auto;
		padding-top: 2%;
		padding-bottom: 2%;
	}
`;

export const Brand = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 425px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const Logo = styled.div`
	width: 10em;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > img {
		height: 40px;
	}
`;

export const Routes = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;

	@media only screen and (max-width: 425px) {
		margin-top: 1em;
	}
`;

export const Route = styled.div`
	margin-left: 2em;
	height: 50%;

	&:hover {
		cursor: pointer;
		& a {
			color: ${(props) => props.theme.colors.primary};
		}
		border-bottom: 3px solid ${(props) => props.theme.colors.primary};
	}

	${(props) =>
		props.active === true
			? css`
					& a {
						color: ${(props) => props.theme.colors.primary};
					}
					border-bottom: 3px solid ${(props) => props.theme.colors.primary};
			  `
			: css`
					& a {
						color: #7f7f7f;
					}
			  `}

	& a {
		font-size: 0.95rem;
		font-family: ${(props) => props.theme.fonts.primary};
		text-decoration: none;
	}

	@media only screen and (max-width: 425px) {
		&:nth-child(1) {
			margin-left: 0;
		}
	}
`;

export const Options = styled.div`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: 425px) {
		margin-top: 1em;
	}
`;

export const Notification = styled.div`
	display: flex;
	flex-direction: row;
	&:hover {
		cursor: pointer;
	}
	& > img {
		height: 2em;
	}
`;

export const NotificationCount = styled.div`
	transform: translateX(100%);
	position: absolute;
	height: 1.2em;
	width: 1.2em;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 1em;
	border: 1px solid ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.orange};
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.primary};
`;

export const UserSet = styled.div`
	margin-left: 1.5em;
	border-left: 1px solid #7f7f7f;
	padding-left: 1.5em;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

export const ProfilePic = styled.img`
	height: 2em;
	width: 2em;
	border-radius: 1em;
	object-fit: cover;
	object-position: top;
`;

export const Username = styled.div`
	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.primary};
`;

export const Caret = styled.img`
	margin-left: 1.5em;
	height: 1em;
`;

export const DropDown = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	margin-top: 70px;
	margin-right: 3%;
	border-radius: 3px;
	background-color: ${(props) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	max-width: 300px;
	box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
	& > a {
		text-decoration: none;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid ${(props) => props.theme.colors.gray};
		&:last-child {
			border-bottom: none;
		}
		&:hover {
			background-color: rgba(0, 0, 0, 0.02);
		}
		& > p {
			font-family: ${(props) => props.theme.fonts.primary};
			text-align: center;
			color: ${(props) => props.theme.colors.primary};
		}
	}
`;
