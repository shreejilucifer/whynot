import { Grid } from '@/styles/Grid';
import { Container, Title, ShowCaseInvite } from '@/styles/Settings';
import { Table, TableHeader, TableRow } from '@/styles/Content';
import Sidebar from './sidebar';
import Link from 'next/link';

export default function AccountSettingsTeam() {
	return (
		<React.Fragment>
			<Grid span="30% auto">
				<Sidebar />
				<Team />
			</Grid>
		</React.Fragment>
	);
}

const colSpan = '35% 20% 20% auto';

export const Team = () => {
	return (
		<Container>
			<Title>
				<span>Team</span>
				<Link href="/dashboard/account-settings/invite">
					<a>+ Invite</a>
				</Link>
			</Title>
			<ShowCaseInvite>
				<img src="/img/dashboard/group.svg" />
				<h2>Use Whynot53 in team</h2>
				<p>3 people are using Whynot53 in your organization.</p>
				<p>
					Work in team to collaborate and benefit from a common subscription.
				</p>
				<Link href="/dashboard/account-settings/invite">
					<a>+ Invite</a>
				</Link>
			</ShowCaseInvite>
			<Title>
				<span>Pending members</span>
			</Title>
			<Table>
				<TableHeader span={colSpan}>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						EMAIL
					</span>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						ROLE
					</span>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						STATUS
					</span>
					<span
						style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}
					></span>
				</TableHeader>
				<TableRow span={colSpan}>
					<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
						sappi@whynot53.com
					</span>
					<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
						Admin
					</span>
					<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
						Invitation sent
					</span>
					<span style={{ alignItems: 'flex-end', paddingRight: '10px' }}>
						<div>Cancel</div>
					</span>
				</TableRow>
			</Table>
		</Container>
	);
};
