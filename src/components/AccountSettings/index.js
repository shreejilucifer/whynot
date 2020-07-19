import { Grid } from '@/styles/Grid';
import {
	Container,
	About,
	SubTitle,
	TimeZone,
	Password,
} from '@/styles/Settings';
import Sidebar from './sidebar';

export default function AccountSettingsAccount() {
	return (
		<React.Fragment>
			<Grid span="30% auto">
				<Sidebar />
				<Account />
			</Grid>
		</React.Fragment>
	);
}

export const Account = () => {
	return (
		<Container>
			<AboutSection
				name="Naveen CT"
				subtitle="Member since March 4, 2017"
				email="naveenct@whynot53.com"
			/>
			<TimeZoneSection time="(GMT+5:30) Chennai" />
			<PasswordSection />
		</Container>
	);
};

export const AboutSection = ({ name, subtitle, email }) => {
	return (
		<About>
			<h2>{name}</h2>
			<SubTitle>{subtitle}</SubTitle>
			<p>
				Email Address: &nbsp;<b>{email}</b>
			</p>
		</About>
	);
};

export const TimeZoneSection = ({ time }) => {
	return (
		<TimeZone>
			<h2>Time zone</h2>
			<span>
				<select defaultValue={time}>
					<option>(GMT+5:30) Chennai</option>
				</select>
				<button>Update my time zone</button>
			</span>
		</TimeZone>
	);
};

export const PasswordSection = () => {
	return (
		<Password>
			<h2>Password</h2>
			<SubTitle>
				Change the password you use to login to your Whynot53 account.
			</SubTitle>
			<div>
				<span>
					<p>New password</p>
					<input type="password" />
				</span>
				<span>
					<p>Current Password</p>
					<input type="password" />
				</span>
				<button>Change my password</button>
			</div>
		</Password>
	);
};
