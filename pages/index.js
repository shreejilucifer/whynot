import {
	Page,
	Nav,
	HeroContainer,
	HeroContent,
	HeroObject,
	FeatureContainer,
	FeatureContent,
	FeatureObject,
} from '../src/styles/Landing/index-page';

import { useRouter } from 'next/router';

export default function IndexPage() {
	const router = useRouter();

	return (
		<Page>
			<Navbar />
			<HeroContainer>
				<HeroContent>
					<h1>The Web application vulnerability scanner</h1>
					<p>Reduce cyber risk, prevent breaches and protect customer data</p>
					<button onClick={() => router.push('/dashboard/home')}>
						<span>Get Started</span>
						<span>
							<img src="/img/landing/arrow.svg" alt="Arrow" />
						</span>
					</button>
				</HeroContent>
				<HeroObject>
					<img src="/img/landing/hero-object.svg" alt="Why Not" />
				</HeroObject>
			</HeroContainer>
			<FeatureContainer>
				<FeatureContent>
					<span>Feature 1</span>
					<span>Feature 2</span>
					<span>Feature 3</span>
				</FeatureContent>
				<FeatureObject>
					<img src="/img/landing/feature1.svg" alt="Features" />
				</FeatureObject>
			</FeatureContainer>
		</Page>
	);
}

const Navbar = () => {
	return <Nav></Nav>;
};
