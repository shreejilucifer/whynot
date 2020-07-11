import { useState } from 'react';
import styled from 'styled-components';
import { Container } from './CommonStyles';
import Link from 'next/link';

export const Navbar = () => {
	const [menu, setMenu] = useState(false);

	return (
		<Nav>
			<NavContainer>
				<Section>
					<NavbarBrand>
						<img src="/img/landing/logo.svg" alt="WhyNot53" />
					</NavbarBrand>
					<Route>
						Product <img src="/img/down-arrow.svg" alt="Caret" />
					</Route>
					<Route>
						<Link href="/pricing">
							<a>Pricing</a>
						</Link>
					</Route>
				</Section>
				<Section>
					<Route>
						<Link href="/signin">
							<a>Sign In</a>
						</Link>
					</Route>
					<Button>
						<Link href="/signup">
							<a>Sign Up</a>
						</Link>
					</Button>
				</Section>
				<Menu>
					<img
						src="/img/landing/menu.svg"
						alt="Menu"
						onClick={() => setMenu(true)}
					/>
					{menu && (
						<MenuDialog>
							<img
								src="/img/landing/close.svg"
								alt="Close"
								onClick={() => setMenu(false)}
							/>
							<Link href="/pricing">
								<a>Pricing</a>
							</Link>
							<Link href="/signin">
								<a>Sign In</a>
							</Link>
							<Link href="/signup">
								<a>Sign Up</a>
							</Link>
						</MenuDialog>
					)}
				</Menu>
			</NavContainer>
		</Nav>
	);
};

export const Menu = styled.div`
	display: none;
	@media only screen and (max-width: 425px) {
		display: block;

		& > img {
			height: 30px;
		}
	}
`;

export const MenuDialog = styled.div`
	position: absolute;
	top: 10px;
	left: 1%;
	width: 98%;
	border-radius: 3px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
	padding: 10px;
	display: flex;
	flex-direction: column;
	& > img {
		height: 30px;
		width: 30px;
		align-self: flex-end;
		margin-bottom: 20px;
	}

	& a {
		padding-top: 10px;
		padding-bottom: 10px;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: ${(props) => props.theme.colors.black};
		font-family: ${(props) => props.theme.fonts.landing};
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
`;

export const Nav = styled.nav`
	position: fixed;
	width: 100%;
	padding: 20px 0 20px;
	background-color: ${(props) => props.theme.colors.white};
	border-bottom: 1px solid ${(props) => props.theme.colors.gray};
	border-radius: 0;
	z-index: 1001;
`;

export const NavContainer = styled(Container)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		margin-left: 15px;
		margin-right: 15px;
	}
`;

export const Section = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const NavbarBrand = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	& > img {
		height: 30px;
	}
`;

export const Route = styled.div`
	margin-left: 25px;
	font-family: ${(props) => props.theme.fonts.landing};
	text-decoration: none;
	color: rgba(0, 0, 0, 0.5);
	&:hover {
		color: ${(props) => props.theme.colors.black};
	}
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	font-size: 15px;
	& a {
		color: rgba(0, 0, 0, 0.5);
		&:hover {
			color: ${(props) => props.theme.colors.black};
		}
		text-decoration: none;
	}
	& img {
		height: 10px;
		margin-left: 10px;
	}
	&:hover {
		cursor: pointer;
	}

	@media only screen and (max-width: 425px) {
		display: none;
	}
`;

export const Button = styled.div`
	& a {
		color: ${(props) => props.theme.colors.black};
		text-decoration: none;
		font-family: ${(props) => props.theme.fonts.landing};
		color: ${(props) => props.theme.colors.white};
	}
	margin-left: 25px;
	padding: 10px 20px 10px 20px;
	background-color: ${(props) => props.theme.colors.orange};
	border-radius: 5px;
	font-size: 15px;
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.darkorange};
	}

	@media only screen and (max-width: 425px) {
		display: none;
	}
`;
