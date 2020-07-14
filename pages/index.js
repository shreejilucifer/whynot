import { Navbar } from '@/landing/Navbar';
import { Hero } from '@/landing/Hero';
import { Quote } from '@/landing/Quote';
import { Footer } from '@/landing/Footer';

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
