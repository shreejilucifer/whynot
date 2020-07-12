import { Navbar } from '../../src/landing-components/Navbar';
import { SiteStats } from '../../src/landing-components/SiteStats';
import { HowItWorks } from '../../src/landing-components/HowItWorks';
import { Footer } from '../../src/landing-components/Footer';

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
