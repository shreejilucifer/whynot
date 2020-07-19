import { useState } from 'react';
import styled, { css } from 'styled-components';
import { InputContainer } from './Hero';
import { Container } from './CommonStyles';
import Link from 'next/link';

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
		&:hover {
			cursor: pointer;

			& > div {
				border: 4px solid ${(props) => props.theme.colors.primary};
			}
		}
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
			font-size: 1rem;

			@media only screen and (max-width: 768px) {
				text-align: left;
			}
		}
	}
`;

export const RadioContainer = styled.div`
	border: 4px solid ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	height: 30px;
	width: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Radio = styled.div`
	height: 14px;
	width: 14px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.white};

	&:hover {
		background-color: ${(props) => props.theme.colors.primary};
	}

	${(props) =>
		props.checked === 'checked' &&
		css`
			background-color: ${(props) => props.theme.colors.primary};
		`}
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
		border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};
	}
	& > span {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-family: ${(props) => props.theme.fonts.landing};
		color: ${(props) => props.theme.colors.primary};
		width: 70%;
		height: 100%;
		padding-left: 10px;
		font-size: 1rem;
		border-left: 1px solid ${(props) => props.theme.colors.tertiary};
		border-top: 1px solid ${(props) => props.theme.colors.tertiary};

		@media only screen and (max-width: 768px) {
			font-size: 14px;
		}
	}

	& > select {
		font-family: ${(props) => props.theme.fonts.landing};
		width: 30%;
		height: 100%;

		color: ${(props) => props.theme.colors.primary};
		border: none;
		font-size: 1rem;
		outline: none;
		padding-left: 2%;
		-webkit-appearance: none;
		-moz-appearance: none;
		&:hover {
			cursor: pointer;
			background-color: rgba(0, 0, 0, 0.05);
		}

		background-image: url('/img/down-arrow.svg');
		background-size: 4%;
		background-repeat: no-repeat;
		background-position-x: 90%;
		background-position-y: 50%;
		border-top: 1px solid ${(props) => props.theme.colors.tertiary};
		border-right: 1px solid ${(props) => props.theme.colors.tertiary};
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
	color: ${(props) => props.theme.colors.primary};
	margin-bottom: 10px;
`;

export const Terms = styled.p`
	font-family: ${(props) => props.theme.fonts.landing};
	color: ${(props) => props.theme.colors.primary};
	margin-top: 10px;

	& > a {
		color: ${(props) => props.theme.colors.primary};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const SiteStats = () => {
	const [services, setServices] = useState([]);

	const onClickService = (service) => {
		if (isChecked(service)) {
			let temp = services;
			temp = temp.filter((x) => x !== service);
			setServices(temp);
		} else {
			setServices([...services, service]);
		}
	};

	const isChecked = (service) => {
		return services.includes(service);
	};

	return (
		<SiteStatsWrapper>
			<SiteStatsContainer>
				<RingGrid>
					<Ring
						text="Bug Bounty"
						onClick={() => onClickService('Bug Bounty')}
						checked={isChecked('Bug Bounty')}
					/>
					<Ring
						text="Web App VAP"
						onClick={() => onClickService('Web App VAP')}
						checked={isChecked('Web App VAP')}
					/>
					<Ring
						text="Mobile App VA"
						onClick={() => onClickService('Mobile App VA')}
						checked={isChecked('Mobile App VA')}
					/>
					<Ring
						text="Network Security"
						onClick={() => onClickService('Network Security')}
						checked={isChecked('Network Security')}
					/>
					<Ring
						text="Cloud Security"
						onClick={() => onClickService('Cloud Security')}
						checked={isChecked('Cloud Security')}
					/>
					<Ring
						text="Source Code"
						onClick={() => onClickService('Source Code')}
						checked={isChecked('Source Code')}
					/>
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

export const Ring = ({ text, onClick, checked }) => (
	<div onClick={onClick}>
		<RadioContainer checked={checked ? 'checked' : 'unchecked'}>
			<Radio checked={checked ? 'checked' : 'unchecked'} />
		</RadioContainer>
		<span>{text}</span>
	</div>
);
