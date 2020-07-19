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
	DropDown,
	Username,
	Caret,
} from '../../styles/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
	const [options, setOptions] = useState(false);

	return (
		<Nav>
			<Container>
				<Brand>
					<Logo>
						<img src="/img/landing/logo.png" alt="Whynot53" />
					</Logo>
					<Routes>
						<Item path="/dashboard/home" title="Home" />
						<Item path="/dashboard/assignments" title="Assignments" />
					</Routes>
				</Brand>
				<Options>
					<Notification>
						<img src="/img/notification.svg" alt="Notification" />
						<NotificationCount>3</NotificationCount>
					</Notification>
					<UserSet onClick={() => setOptions(!options)}>
						<Username>Ranjeet</Username>
						<Caret src="/img/down-arrow.svg" alt="Caret" />
					</UserSet>
					{options && (
						<DropDown onMouseLeave={() => setOptions(false)}>
							<Link href="/dashboard/home">
								<a>
									<p>Naveen CT</p>
									<p>TouchBistro Technologies Private Limited </p>
								</a>
							</Link>
							<Link href="/dashboard/account-settings">
								<a>
									<p>Account Settings</p>
								</a>
							</Link>
							<Link href="/">
								<a>
									<p>Logout</p>
								</a>
							</Link>
						</DropDown>
					)}
				</Options>
			</Container>
		</Nav>
	);
}

// 	<ProfilePic src="/img/user.svg" alt="ProfilePic" />
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
