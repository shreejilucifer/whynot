import {
	Nav,
	Container,
	Brand,
	Logo,
	Routes,
	Route,
	Options,
	Notification,
	NotificationCount,
	UserSet,
	ProfilePic,
	Username,
	Caret,
} from '../../styles/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
	return (
		<Nav>
			<Container>
				<Brand>
					<Logo>
						<img src="/img/landing/logo.png" alt="Whynot53" />
					</Logo>
					<Routes>
						<Item path="/dashboard/home" title="Home" />
						<Item path="/dashboard/projects" title="Assignments" />
					</Routes>
				</Brand>
				<Options>
					<Notification>
						<img src="/img/notification.svg" alt="Notification" />
						<NotificationCount>3</NotificationCount>
					</Notification>
					<UserSet>
						<ProfilePic src="/img/user.jpeg" alt="ProfilePic" />
						<Username>Ranjeet</Username>
						<Caret src="/img/down-arrow.svg" alt="Caret" />
					</UserSet>
				</Options>
			</Container>
		</Nav>
	);
}

const Item = (props) => {
	const router = useRouter();
	return (
		<Link href={props.path}>
			<Route active={router.pathname === props.path}>
				<a>{props.title}</a>
			</Route>
		</Link>
	);
};
