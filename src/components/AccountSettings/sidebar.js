import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	& > h5 {
		font-family: ${(props) => props.theme.fonts.primary};
		font-size: 12px;
		font-weight: 600px;
		text-transform: uppercase;
		color: #888;
		margin-bottom: 20px;
		padding-left: 5%;
	}

	& > span {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 50px;
		width: 90%;
		padding-left: 5%;

		border-radius: 3px;

		&:hover {
			background-color: #e9eded;
		}
		& a {
			width: 100%;
			display: grid;
			grid-template-columns: 20% 80%;
			align-items: center;
			text-decoration: none;

			& > img {
				height: 25px;
				width: 25px;
			}

			& > p {
				font-family: ${(props) => props.theme.fonts.primary};
				color: ${(props) => props.theme.colors.primary};
			}
		}
	}
`;

export default function Sidebar() {
	return (
		<Container>
			<h5>ACCOUNT & SETTINGS</h5>
			<span>
				<Link href="/dashboard/account-settings">
					<a>
						<img src="/img/dashboard/user-1.svg" />
						<p>Account</p>
					</a>
				</Link>
			</span>
			<span>
				<Link href="/dashboard/account-settings/team">
					<a>
						<img src="/img/dashboard/group.svg" />
						<p>Team</p>
					</a>
				</Link>
			</span>
			<span>
				<Link href="/dashboard/account-settings/billing">
					<a>
						<img src="/img/dashboard/credit-card.svg" />
						<p>Billing</p>
					</a>
				</Link>
			</span>
			<span>
				<Link href="/dashboard/account-settings/applications">
					<a>
						<img src="/img/dashboard/share.svg" />
						<p>Applications</p>
					</a>
				</Link>
			</span>
		</Container>
	);
}
