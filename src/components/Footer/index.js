import { Container, Logo, Copyright, Links } from '../../styles/Footer';
import Link from 'next/link';

export default function Footer() {
	return (
		<Container>
			<div>
				<Logo>
					<img src="/img/landing/logo.png" alt="Whynot53" />
				</Logo>
				<Copyright>&copy; Whynot53. All rights reserved.</Copyright>
			</div>

			<Links>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/terms">
					<a>Terms</a>
				</Link>
				<Link href="/privacy">
					<a>Privacy</a>
				</Link>
			</Links>
		</Container>
	);
}
