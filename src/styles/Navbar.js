import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 85px;
	border-bottom: 1px solid #d9dbde;
	background-color: ${(props) => props.theme.colors.white};
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
	margin-right: 2em;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	& > img {
		width: 100%;
		height: 90%;
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
			color: ${(props) => props.theme.colors.black};
		}
		border-bottom: 3px solid ${(props) => props.theme.colors.primary};
	}

	${(props) =>
		props.active === true
			? css`
					& a {
						color: ${(props) => props.theme.colors.black};
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
	background-color: ${(props) => props.theme.colors.secondary};
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
	margin-left: 1.5em;
	font-family: ${(props) => props.theme.fonts.primary};
	color: ${(props) => props.theme.colors.secondary};
`;

export const Caret = styled.img`
	margin-left: 1.5em;
	height: 1em;
`;
