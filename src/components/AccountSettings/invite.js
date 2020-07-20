import { Grid } from '@/styles/Grid';
import { Container, Title, Invite, InviteOption } from '@/styles/Settings';
import Sidebar from './sidebar';
import Link from 'next/link';
import { useState } from 'react';

export default function AccountSettingsInvite() {
	return (
		<React.Fragment>
			<Grid span="30% auto">
				<Sidebar />
				<InviteSection />
			</Grid>
		</React.Fragment>
	);
}

export const InviteSection = () => {
	const [role, setRole] = useState('member');

	return (
		<Container>
			<Title style={{ justifyContent: 'flex-start' }}>
				<Link href="/dashboard/account-settings/team">
					<a style={{ padding: '0', background: 'none' }}>
						<img src="/img/dashboard/back.svg" alt="Back Button" />
					</a>
				</Link>
				<span style={{ marginLeft: '20px' }}>Invite a new member</span>
			</Title>
			<Invite>
				<section>
					<label>Email Address</label>
					<input type="text" placeholder="someone@whynot53.com" />
				</section>

				<section>
					<Title>
						<span>Role</span>
					</Title>
					<InviteOption
						onClick={() => setRole('member')}
						checked={role === 'member'}
					>
						<input type="radio" name="role" checked={role === 'member'} />
						<span>
							<h4>Member</h4>
							<p>Joins the team but cannot manage other members.</p>
						</span>
					</InviteOption>
					<InviteOption
						onClick={() => setRole('admin')}
						checked={role === 'admin'}
					>
						<input type="radio" name="role" checked={role === 'admin'} />
						<span>
							<h4>Admin</h4>
							<p>Joins the team but cannot manage other members.</p>
						</span>
					</InviteOption>
				</section>
				<button>Send an invitation</button>
			</Invite>
		</Container>
	);
};
