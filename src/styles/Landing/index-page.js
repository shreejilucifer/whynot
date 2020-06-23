import styled from 'styled-components';

export const Page = styled.div`
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
`;

export const Nav = styled.nav`
	position: absolute;
	width: 100%;
	border: 1px solid black;
	height: 5em;
`;

export const HeroContainer = styled.div`
	background-image: url('/img/landing/hero-background.svg');
	background-position: top;
	background-size: contain;
	background-repeat: no-repeat;
	min-height: 57em;
	display: grid;
	grid-template-columns: 50% 50%;
	padding-left: 5%;
	padding-right: 5%;

	@media only screen and (max-width: 425px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-size: cover;
	}
`;

export const HeroContent = styled.div`
	align-self: center;
	padding-right: 10%;
	& > h1 {
		font-family: ${(props) => props.theme.fonts.primary};
		color: ${(props) => props.theme.colors.white};
		font-size: 3em;
	}
	& > p {
		margin-top: 2em;
		color: ${(props) => props.theme.colors.white};
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 1.5em;
	}
	& > button {
		font-family: ${(props) => props.theme.fonts.primary};
		margin-top: 2em;
		width: 40%;
		padding-top: 1em;
		padding-bottom: 1em;
		background-color: ${(props) => props.theme.colors.tertiary};
		border: none;
		border-radius: 0.5em;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		&:hover {
			cursor: pointer;
			-webkit-box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 50px 5px;
			-moz-box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 50px 5px;
			transform: translateY(-0.1em);
			box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 50px 5px;
		}

		& > span {
			color: ${(props) => props.theme.colors.white};
			font-size: 1.5rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			& > img {
				height: 1.5rem;
			}
		}
	}
`;

export const HeroObject = styled.div`
	align-self: center;
	& > img {
		width: 100%;
		max-width: 41em;
	}
`;
