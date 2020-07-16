import styled, { css } from 'styled-components';
import { Container } from './CommonStyles';
import { useState } from 'react';

export const PricingContainer = styled(Container)`
	padding-top: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (max-width: 768px) {
		margin-left: 15px;
		margin-right: 15px;
	}
`;

export const Title = styled.h1`
	text-align: center;
	font-family: ${(props) => props.theme.fonts.landing};
	color: ${(props) => props.theme.colors.primary};
	font-weight: 400;
	font-size: 40px;
`;

export const SwitchContainer = styled.div`
	margin-top: 30px;
	width: 40%;
	display: grid;
	grid-template-columns: 50% 50%;
	padding: 5px;
	border-radius: 30px;
	background-color: ${(props) => props.theme.colors.gray};

	@media only screen and (max-width: 768px) {
		width: 55%;
	}

	@media only screen and (max-width: 425px) {
		width: 100%;
	}
`;

export const SwitchOption = styled.span`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	padding-top: 10px;
	padding-bottom: 10px;
	font-family: ${(props) => props.theme.fonts.landing};
	color: rgba(0, 0, 0, 0.5);
	&:hover {
		cursor: pointer;
	}
	${(props) =>
		props.active &&
		css`
			background-color: ${(props) => props.theme.colors.white};
			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
			border-radius: 20px;
			color: ${(props) => props.theme.colors.primary};
		`}

	@media only screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const Table = styled.div`
	width: 100%;
	@media only screen and (max-width: 425px) {
		overflow-x: scroll;
		margin-left: auto;
		min-width: 100%;
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: 25% 15% 15% 15% 15% 15%;
	width: 100%;
	${(props) =>
		props.head
			? css`
					margin-top: 20px;
					& > div {
						padding: 10px;
					}
			  `
			: css`
					border-top: 1px solid rgba(0, 0, 0, 0.1);
			  `}
	${(props) =>
		props.last &&
		css`
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		`}
	
	@media only screen and (max-width: 425px) {
		width: 200%;
	}
`;

export const Cell = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 15px;
	padding-bottom: 15px;
	${(props) =>
		!props.noborder &&
		css`
			border-left: 1px solid rgba(0, 0, 0, 0.1);
		`}

	& > p {
		font-family: ${(props) => props.theme.fonts.landing};
		color: ${(props) => props.theme.colors.primary};

		${(props) =>
			props.text === 'white' &&
			css`
				color: white;
			`}
		font-size: 13px;
		text-align: center;

		@media only screen and (max-width: 768px) {
			font-size: 10px;
		}
	}

	& > h4 {
		font-family: ${(props) => props.theme.fonts.landing};
		color: ${(props) => props.theme.colors.primary};
		font-weight: 600;
		@media only screen and (max-width: 768px) {
			font-size: 12px;
		}
	}

	${(props) =>
		props.color &&
		css`
			background-color: ${props.color};
			color: ${props.text};
		`}
`;

export const AddOn = styled.div`
	width: 100%;
	margin-top: 25px;
	padding-bottom: 30px;
	& > h3 {
		font-family: ${(props) => props.theme.fonts.landing};
		color: ${(props) => props.theme.colors.primary};
		font-weight: 600;
		font-size: 25px;

		@media only screen and (max-width: 768px) {
			font-size: 20px;
		}
	}

	& > span {
		margin-top: 15px;
		display: flex;
		flex-direction: row;
		align-items: center;
		& > img {
			height: 20px;
			@media only screen and (max-width: 768px) {
				height: 15px;
			}
		}
		& > p {
			font-family: ${(props) => props.theme.fonts.landing};
			color: ${(props) => props.theme.colors.primary};
			margin-left: 10px;
			font-size: 15px;
			@media only screen and (max-width: 768px) {
				font-size: 13px;
			}
		}
	}
`;

export const Pricing = () => {
	const [active, setActive] = useState(1);

	return (
		<PricingContainer>
			<Title>Pricing</Title>
			<SwitchContainer>
				<SwitchOption active={active === 1} onClick={() => setActive(1)}>
					One Time
				</SwitchOption>
				<SwitchOption active={active === 2} onClick={() => setActive(2)}>
					Retention (Save up to 70%)
				</SwitchOption>
			</SwitchContainer>
			<Retention />
			<AddOn>
				<h3>ADD-ON's</h3>
				<AddOnItem text="Detailed Penetration Test Report" />
				<AddOnItem text="Live-Reporting via PGP-encrypted Mail for Findings of high & critical Severity" />
				<AddOnItem text="Regular Status updates via Mail during the Test, Use of organisation's Slack/Github" />
				<AddOnItem text="Re-Tests & Verification of installed Fixes during and after the Penetration-Test & Audit" />
				<AddOnItem text="Major Release per Asset-based auditing & Monthly new releases test (Retention Model)" />
			</AddOn>
		</PricingContainer>
	);
};

export const AddOnItem = ({ text }) => {
	return (
		<span>
			<img src="/img/landing/check.svg" alt="Checked" />
			<p>{text}</p>
		</span>
	);
};

export const Retention = () => {
	return (
		<Table>
			<Row head>
				<Cell noborder></Cell>
				<Cell noborder>
					<p>2-5 Days</p>
					<p>(Max 3 Researchers)</p>
					<p>Billed One time</p>
				</Cell>
				<Cell noborder>
					<p>6-8 Days</p>
					<p>(Max 3 Researchers)</p>
					<p>Billed One time</p>
				</Cell>
				<Cell noborder>
					<p>9-15 Days</p>
					<p>(Max 3 Researchers)</p>
					<p>Billed One time</p>
				</Cell>
				<Cell noborder color="rgba(0,0,0,0.3)" text="white">
					<p>182 Days</p>
					<p>(Max 3 Researchers)</p>
					<p>Billed half yearly</p>
				</Cell>
				<Cell noborder color="rgba(0,0,0,0.4)" text="white">
					<p>365 Days</p>
					<p>(Max 3 Researchers)</p>
					<p>Billed yearly</p>
				</Cell>
			</Row>
			<Row>
				<Cell noborder>
					<h4>Web App VAPT</h4>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$5,500/6 Months</p>
				</Cell>
				<Cell>
					<p>$10,000/Year</p>
				</Cell>
			</Row>
			<Row>
				<Cell noborder>
					<h4>Mobile App VAPT</h4>
				</Cell>
				<Cell>
					<p>$500/Day</p>
				</Cell>
				<Cell>
					<p>$500/Day</p>
				</Cell>
				<Cell>
					<p>$500/Day</p>
				</Cell>
				<Cell>
					<p>$5,500/6 Months</p>
				</Cell>
				<Cell>
					<p>$10,000/Year</p>
				</Cell>
			</Row>
			<Row>
				<Cell noborder>
					<h4>Network Security</h4>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$5,500/6 Months</p>
				</Cell>
				<Cell>
					<p>$10,000/Year</p>
				</Cell>
			</Row>
			<Row>
				<Cell noborder>
					<h4>Cloud Security</h4>
				</Cell>
				<Cell>
					<p>$650/Day</p>
				</Cell>
				<Cell>
					<p>$650/Day</p>
				</Cell>
				<Cell>
					<p>$650/Day</p>
				</Cell>
				<Cell>
					<p>$5,500/6 Months</p>
				</Cell>
				<Cell>
					<p>$10,000/Year</p>
				</Cell>
			</Row>
			<Row>
				<Cell noborder>
					<h4>Source Code Review</h4>
				</Cell>
				<Cell>
					<p>$650/Day</p>
				</Cell>
				<Cell>
					<p>$650/Day</p>
				</Cell>
				<Cell>
					<p>$650/Day</p>
				</Cell>
				<Cell>
					<p>$5,500/6 Months</p>
				</Cell>
				<Cell>
					<p>$10,000/Year</p>
				</Cell>
			</Row>
			<Row last>
				<Cell noborder>
					<h4>All Inclusive</h4>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$600/Day</p>
				</Cell>
				<Cell>
					<p>$5,500/6 Months</p>
				</Cell>
				<Cell>
					<p>$10,000/Year</p>
				</Cell>
			</Row>
		</Table>
	);
};
