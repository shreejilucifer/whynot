import { Navbar } from '@/landing/Navbar';
import { SiteStats } from '@/landing/SiteStats';
import { HowItWorks } from '@/landing/HowItWorks';
import { Footer } from '@/landing/Footer';

export default function SitePage() {
	return (
		<div>
			<Navbar />
			<SiteStats />
			<HowItWorks />
			<Footer />
		</div>
	);
}
