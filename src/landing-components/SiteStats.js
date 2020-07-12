import styled from 'styled-components';
import { InputContainer } from './Hero';
import { Container } from './CommonStyles';
import { PieChart, Pie, Cell } from 'recharts';
import Link from 'next/link';

const data = [
	{ name: 'New', value: 8 },
	{ name: 'Reopened', value: 5 },
	{ name: 'Not Fixed', value: 0 },
	{ name: 'Fixed', value: 0 },
];

const COLORS = ['#FF5722', '#808080'];

export const SiteStatsWrapper = styled.div`
	background-color: #fafbfb;
	@media only screen and (max-width: 768px) {
		margin-left: 15px;
		margin-right: 15px;
	}
`;

export const SiteStatsContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	padding-top: 120px;
	padding-bottom: 50px;
`;

export const RingGrid = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;

	@media only screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: 33.33% 33.33% 33.33%;
	}

	@media only screen and (max-width: 425px) {
		display: grid;
		grid-template-columns: 50% 50%;
	}

	& > div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		@media only screen and (max-width: 768px) {
			display: grid;
			grid-template-columns: 20% 80%;
			margin-left: 10px;
			margin-right: 10px;
			margin-top: 10px;
		}

		@media only screen and (max-width: 425px) {
			display: grid;
			grid-template-columns: 25% 75%;
		}

		& > span {
			text-align: center;
			margin-left: 5px;
			font-family: ${(props) => props.theme.fonts.landing};

			@media only screen and (max-width: 768px) {
				text-align: left;
			}
		}
	}
`;

export const StatsContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
`;

export const InputGroup = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	&:last-child {
		border-bottom: 1px solid ${(props) => props.theme.colors.orange};
	}
	& > span {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-family: ${(props) => props.theme.fonts.landing};
		width: 70%;
		height: 100%;
		padding-left: 10px;
		font-size: 20px;
		border-left: 1px solid ${(props) => props.theme.colors.orange};
		border-top: 1px solid ${(props) => props.theme.colors.orange};

		@media only screen and (max-width: 768px) {
			font-size: 14px;
		}
	}

	& > select {
		font-family: ${(props) => props.theme.fonts.landing};
		width: 30%;
		height: 100%;
		background-color: ${(props) => props.theme.colors.orange};
		color: ${(props) => props.theme.colors.white};
		border: none;
		font-size: 20px;
		outline: none;
		padding-left: 2%;
		-webkit-appearance: none;
		-moz-appearance: none;
		&:hover {
			cursor: pointer;
			background-color: ${(props) => props.theme.colors.darkorange};
		}

		background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='40' viewBox='0 0 30 30' width='30' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h30v30H0z' fill='none'/></svg>");
		background-repeat: no-repeat;
		background-position-x: 90%;
		background-position-y: 50%;
		border-top: 1px solid ${(props) => props.theme.colors.darkorange};

		@media only screen and (max-width: 768px) {
			font-size: 14px;
		}
	}
`;

export const MailContainer = styled.div`
	margin-top: 30px;
	width: 95%;
	margin-left: auto;
	margin-right: auto;
`;

export const Label = styled.p`
	font-family: ${(props) => props.theme.fonts.landing};
	color: rgba(0, 0, 0, 0.5);
	margin-bottom: 10px;
`;

export const Terms = styled.p`
	font-family: ${(props) => props.theme.fonts.landing};
	color: rgba(0, 0, 0, 0.5);
	margin-top: 10px;

	& > a {
		color: rgba(0, 0, 0, 0.5);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const SiteStats = () => {
	return (
		<SiteStatsWrapper>
			<SiteStatsContainer>
				<RingGrid>
					<Ring text="Bug Bounty" />
					<Ring text="Web App VAP" />
					<Ring text="Mobile App VA" />
					<Ring text="Network Security" />
					<Ring text="Cloud Security" />
					<Ring text="Source Code" />
				</RingGrid>
				<StatsContainer>
					<Item
						text="What programming languages & frameworks are in use?"
						options={['Laravel', 'NextJS', 'Django', 'Express']}
					/>
					<Item text="How many lines of code are there to audit(cloc output welcome)" />
					<Item text="How many applications are in scope, back-end too?" />
					<Item text="How many servers are in scope? SSH access will be granted?" />
					<Item text="How many mobile apps are in scope, what platforms?" />
					<Item text="How many permission model inside application?" />
					<Item text="WAF used if there is any." />
					<Item text="Is that live environment or staging environment?" />
					<Item text="What will be the time constraint if testing place in live enviroment" />
				</StatsContainer>
				<MailContainer>
					<Label>Work Email Address</Label>
					<InputContainer>
						<input type="text" placeholder="you@company.com" />
						<button type="submit">Get a Quote</button>
					</InputContainer>
					<Terms>
						By signing up, you agree to our{' '}
						<Link href="/terms">
							<a>Terms of Service</a>
						</Link>{' '}
						and our{' '}
						<Link href="/privacy">
							<a>Privacy Policy</a>
						</Link>
					</Terms>
				</MailContainer>
			</SiteStatsContainer>
		</SiteStatsWrapper>
	);
};

export const Item = ({ text, options }) => {
	return (
		<InputGroup>
			<span>{text}</span>
			<select>
				<option value="">Select</option>
				{options &&
					options.map((o, i) => (
						<option value={o} key={i}>
							{o}
						</option>
					))}
			</select>
		</InputGroup>
	);
};

export const Ring = ({ text }) => (
	<div>
		<PieChart width={40} height={40}>
			<Pie
				data={data}
				cx={15}
				cy={15}
				innerRadius={12}
				outerRadius={20}
				fill="#FF5722"
				paddingAngle={0}
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
		</PieChart>
		<span>{text}</span>
	</div>
);
