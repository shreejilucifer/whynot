import { Navbar } from '../src/landing-components/Navbar';

import { Footer } from '../src/landing-components/Footer';
import Link from 'next/link';

export default function SignInPage() {
	return (
		<div>
			<Navbar />
			<h4 style={{ paddingTop: '120px' }}>Sign In Page</h4>
			<Link href="/dashboard/home">
				<a>Go to Dashboard</a>
			</Link>
			<Footer />
		</div>
	);
}
