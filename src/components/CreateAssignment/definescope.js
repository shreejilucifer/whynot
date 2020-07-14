import * as S from '../../landing-components/SiteStats';
import { Button } from '../../styles/Forms';
import styled from 'styled-components';
import { useState } from 'react';

export const EmailContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 25px;
	padding-left: 10%;
	padding-right: 10%;
	width: 100%;
	align-items: center;
	& > p {
		font-size: 1rem;
		font-family: ${(props) => props.theme.fonts.primary};
		width: 20%;
	}

	& > input {
		height: 2rem;
		font-size: 1rem;
		border: 1px solid ${(props) => props.theme.colors.orange};
		background: none;
		border-radius: 3px;
		width: 80%;
		padding-left: 10px;
		outline: none;
	}
`;

export default function DefineScope(props) {
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
		<S.SiteStatsContainer style={{ paddingTop: '0px', paddingBottom: '0px' }}>
			<S.RingGrid>
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
			</S.RingGrid>

			<EmailContainer>
				<p>Application URL</p>
				<input type="text" placeholder="www.touchbistro.com" />
			</EmailContainer>

			<S.StatsContainer
				style={{
					marginLeft: '10%',
					marginRight: '10%',
					marginTop: '25px',
				}}
			>
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
			</S.StatsContainer>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: '15px',
				}}
			>
				<Button active={false}>Cancel</Button>
				<Button type="submit" active={true} onClick={() => props.onSubmit()}>
					Submit
				</Button>
			</div>
		</S.SiteStatsContainer>
	);
}

export const Item = ({ text, options }) => {
	return (
		<S.InputGroup>
			<span style={{ fontSize: '1em' }}>{text}</span>
			<select style={{ fontSize: '1em' }}>
				<option value="">Select</option>
				{options &&
					options.map((o, i) => (
						<option value={o} key={i}>
							{o}
						</option>
					))}
			</select>
		</S.InputGroup>
	);
};

export const Ring = ({ text, onClick, checked }) => (
	<div onClick={onClick}>
		<S.Radio checked={checked ? 'checked' : 'unchecked'} />
		<span>{text}</span>
	</div>
);
