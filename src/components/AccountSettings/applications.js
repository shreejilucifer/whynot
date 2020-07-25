import { Grid } from '@/styles/Grid';
import { Container, Title, ShowCaseInvite, SubTitle } from '@/styles/Settings';
import Sidebar from './sidebar';
import Link from 'next/link';

export default function AccountSettingsApplication() {
	return (
		<React.Fragment>
			<Grid span="30% auto">
				<Sidebar />
				<ApplicationSection />
			</Grid>
		</React.Fragment>
	);
}

const colSpan = '25% 50% auto';

export const ApplicationSection = () => {
	return (
		<Container>
			<Title>
				<span>Connected Applications</span>
				<Link href="/dashboard/account-settings/newapplication">
					<a>+ New</a>
				</Link>
			</Title>
			<ShowCaseInvite>
				<img src="/img/dashboard/box.svg" />
				<p>No application, yet.</p>
				<p>
					Connect Whynot53 with the application you use, to sync your leads or
					send emails.
				</p>
			</ShowCaseInvite>
		</Container>
	);
};
