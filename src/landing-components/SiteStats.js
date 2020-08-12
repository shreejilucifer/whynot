import { useState } from 'react';
import styled, { css } from 'styled-components';
import { InputContainer } from './Hero';
import { Container } from './CommonStyles';
import Link from 'next/link';

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

	& > select,
	& > input,
	& > div {
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

	& > input {
		background: none;
	}

	& > div {
		padding-left: 0;
		background: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		& > span {
		}
		& > input {
			height: 100%;
			width: 100%;
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
						text="Web App VAP"
						onClick={() => onClickService('Web App VAP')}
						checked={isChecked('Web App VAP')}
					/>
					<Ring
						text="Mobile App VAP"
						onClick={() => onClickService('Mobile App VAP')}
						checked={isChecked('Mobile App VAP')}
					/>
					<Ring
						text="Network Security"
						onClick={() => onClickService('Network Security')}
						checked={isChecked('Network Security')}
					/>
					<Ring
						text="Source Code"
						onClick={() => onClickService('Source Code')}
						checked={isChecked('Source Code')}
					/>
				</RingGrid>
				<StatsContainer>
					{/* 1 */}
					{(isChecked('Web App VAP') ||
						isChecked('Mobile App VAP') ||
						isChecked('Source Code')) && (
						<InputGroup>
							<span>What programming languages & frameworks are in use?</span>
							<input type="text" placeholder="Laravel, Django, Express" />
						</InputGroup>
					)}
					{isChecked('Source Code') && (
						<InputGroup>
							<span>
								How many lines of code are there to audit(cloc output welcome)
							</span>
							<select>
								<option value="">Select</option>
								<option value="<20,000">{'< 20,000'}</option>
								<option value="20,000-50,000">20,000 - 50,000</option>
								<option value="50,000-100,000">50,000-100,000</option>
								<option value=">100,000">{'> 100,000'}</option>
							</select>
						</InputGroup>
					)}

					{/* 3 */}
					{isChecked('Web App VAP') && (
						<InputGroup>
							<span>How many subdomains are in scope, back-end too?</span>
							<input type="text" placeholder="All or 25" />
						</InputGroup>
					)}

					{/* 4 */}
					{(isChecked('Web App VAP') ||
						isChecked('Mobile App VAP') ||
						isChecked('Network Security')) && (
						<InputGroup>
							<span>Type of authentication for the application testing?</span>
							<select>
								<option value="">Select</option>
								<option value="Authenticated">Authenticated</option>
								<option value="Unauthenticated">Unauthenticated</option>
							</select>
						</InputGroup>
					)}

					{/* 5 */}
					{isChecked('Network Security') && (
						<InputGroup>
							<span>How many servers are in scope?</span>
							<input type="text" placeholder="10" />
						</InputGroup>
					)}

					{/* 6 */}
					{isChecked('Network Security') && (
						<InputGroup>
							<span>SSH access will be granted?</span>
							<input type="text" placeholder="Yes or No" />
						</InputGroup>
					)}

					{/* 7 */}
					{isChecked('Mobile App VAP') && (
						<InputGroup>
							<span>How many mobile apps are in scope?</span>
							<input type="text" placeholder="10" />
						</InputGroup>
					)}

					{/* 8 */}
					{(isChecked('Web App VAP') || isChecked('Mobile App VAP')) && (
						<InputGroup>
							<span>How many permission models inside the application?</span>
							<select>
								<option value="">Select</option>
								<option value="1-10">1 - 10</option>
								<option value="More than 10">More than 10</option>
							</select>
						</InputGroup>
					)}

					{/* 9 */}
					{(isChecked('Web App VAP') ||
						isChecked('Mobile App VAP') ||
						isChecked('Network Security')) && (
						<InputGroup>
							<span>WAF used, name if there is any.</span>
							<div>
								<span>
									<input type="radio" name="waf" /> Yes &nbsp; &nbsp;
									<input type="radio" name="waf" /> No
								</span>
								{/*<input type="text" placeholder="Software based WAF: ModSecurity" />*/}
							</div>
						</InputGroup>
					)}

					{/* 10 */}
					{(isChecked('Web App VAP') ||
						isChecked('Mobile App VAP') ||
						isChecked('Network Security')) && (
						<InputGroup>
							<span>
								If the application has WAF then how the application should be
								tested?
							</span>
							<select>
								<option value="">Select</option>
								<option value="Without WAF">Without WAF</option>
								<option value="With WAF">With WAF</option>
							</select>
						</InputGroup>
					)}

					{/* 11 */}
					{(isChecked('Web App VAP') ||
						isChecked('Mobile App VAP') ||
						isChecked('Network Security')) && (
						<InputGroup>
							<span>The testing environment would be?</span>
							<select>
								<option value="">Select</option>
								<option value="Live environment">Live environment</option>
								<option value="Staging environment">Staging environment</option>
							</select>
						</InputGroup>
					)}

					{/* 12 */}
					{(isChecked('Web App VAP') ||
						isChecked('Mobile App VAP') ||
						isChecked('Network Security')) && (
						<InputGroup>
							<span>
								What will be the time constraint if testing place in live
								environment?
							</span>
							<input type="datetime-local" />
						</InputGroup>
					)}
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
