import styled, { css } from 'styled-components';
import { Container } from './CommonStyles';
import Link from 'next/link';

export const FooterSection = styled.div`
	background-color: #262626;
	padding-top: 100px;
`;

export const FooterContainer = styled(Container)`
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: 768px) {
		margin-left: 15px;
		margin-right: 15px;
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;

	@media only screen and (max-width: 425px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const List = styled.ul`
	list-style: none;

	@media only screen and (max-width: 425px) {
		width: 100%;
		text-align: center;
		margin-bottom: 25px;
	}
`;

export const Item = styled.li`
	font-family: ${(props) => props.theme.fonts.landing};
	margin-top: 18px;
	font-size: 14px;

	& a {
		color: ${(props) => props.theme.colors.white};
		text-decoration: none;
		opacity: 0.6;
		display: flex;
		flex-direction: row;
		align-items: center;

		@media only screen and (max-width: 425px) {
			justify-content: center;
		}
	}

	&:hover {
		& a {
			opacity: 1;
		}
	}

	${(props) =>
		props.title &&
		props.title.toString() &&
		css`
			font-weight: 600;
			letter-spacing: 1.5px;
			font-size: 15px;
			line-height: 1.5em;
			color: ${(props) => props.theme.colors.white};
			text-transform: uppercase;
			margin-top: 0px;
		`}
`;

export const Circle = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 5px;
	background-color: lightgreen;
	margin-right: 5px;
`;

export const Social = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: row;
	& > a {
		margin-right: 20px;
	}
	& img {
		height: 20px;

		opacity: 0.6;

		&:hover {
			opacity: 1;
		}
	}

	@media only screen and (max-width: 425px) {
		justify-content: center;
	}
`;

export const Line = styled.div`
	height: 1px;
	width: 25%;
	background-color: rgba(255, 255, 255, 0.3);
	@media only screen and (max-width: 425px) {
		margin: auto;
	}
`;

export const Legal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-top: 25px;
	padding-bottom: 25px;
	& span,
	& a {
		font-family: ${(props) => props.theme.fonts.landing};
		font-size: 14px;
		color: rgba(255, 255, 255, 0.5);
		text-decoration: none;
	}

	& a:hover {
		color: rgba(255, 255, 255, 1);
	}

	& span {
		margin-left: 10px;
		margin-right: 10px;
	}

	& span:first-child {
		margin: 0;
	}

	@media only screen and (max-width: 425px) {
		flex-direction: column;
		& > div {
			margin-bottom: 20px;
		}
	}
`;
export const Footer = () => {
	return (
		<FooterSection>
			<FooterContainer>
				<FooterGrid>
					<List>
						<Item title="true">Product</Item>
						<Route link="/bug-bounty" text="Bug Bounty" />
						<Route link="/web-app-vapt" text="Web App VAPT" />
						<Route link="/mobile-app-vapt" text="Mobile App VAPT" />
						<Route link="/network-security" text="Network Security" />
						<Route link="/cloud-security" text="Cloud Security" />
						<Route link="/source-code-review" text="Source Code Review" />
						<Route link="/how-it-works" text="How it Works?" />
					</List>
					<List>
						<Item title="true">Add-Ons</Item>
						<Route link="/demo-request" text="Demo Request" />
						<Route link="/apis" text="APIs" />
						<Route link="/developer-docs" text="Developer Docs" />
						<Route link="/applications" text="Applications" />
					</List>
					<List>
						<Item title="true">Company</Item>
						<Route link="/about" text="About" />
						<Route link="/blog" text="Blog" />
						<Route link="/press-resources" text="Press Resources" />
						<Route link="/news" text="News" />
						<Route link="/affiliate-program" text="Affiliate Program" />
						<Route link="/careers" text="Careers" />
					</List>
					<List>
						<Item title="true">Support</Item>
						<Item>
							<Link href="/system-status">
								<a>
									<Circle />
									All System Operational
								</a>
							</Link>
						</Item>
						<Route link="/contact-us" text="Contact Us" />
						<Route link="/help-center" text="Help Center" />
						<Route link="/wn53-bug-bounty" text="WN53 Bug Bounty" />
					</List>
				</FooterGrid>
				<Social>
					<a href="https://twitter.com" target="_blank" rel="noopener">
						<img src="/img/landing/twitter.svg" alt="Twitter" />
					</a>
					<a href="https://facebook.com" target="_blank" rel="noopener">
						<img src="/img/landing/facebook.svg" alt="Facebook" />
					</a>
					<a href="https://linkedin.com" target="_blank" rel="noopener">
						<img src="/img/landing/linkedin.svg" alt="Linkedin" />
					</a>
					<a href="https://medium.com" target="_blank" rel="noopener">
						<img src="/img/landing/medium.svg" alt="Medium" />
					</a>
					<a href="https://youtube.com" target="_blank" rel="noopener">
						<img src="/img/landing/youtube.svg" alt="Youtube" />
					</a>
					<a href="https://github.com" target="_blank" rel="noopener">
						<img src="/img/landing/github.svg" alt="Github" />
					</a>
				</Social>
				<Line />
				<Legal>
					<div>
						<span>
							© {new Date().getFullYear()} Whynot53 Technologies Pvt Ltd.
						</span>
					</div>
					<div>
						<Link href="/terms">
							<a>Terms</a>
						</Link>
						<span>•</span>
						<Link href="/privacy">
							<a>Privacy</a>
						</Link>
						<span>•</span>
						<Link href="/security">
							<a>Security</a>
						</Link>
					</div>
				</Legal>
			</FooterContainer>
		</FooterSection>
	);
};

export const Route = ({ link, text }) => (
	<Item>
		<Link href={link}>
			<a>{text}</a>
		</Link>
	</Item>
);
