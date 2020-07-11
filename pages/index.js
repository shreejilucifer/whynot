import { Navbar } from '../src/landing-components/Navbar';
import { Hero } from '../src/landing-components/Hero';
import { Quote } from '../src/landing-components/Quote';
import { Footer } from '../src/landing-components/Footer';

export default function IndexPage() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Quote />
			<Footer />
		</div>
	);
}
