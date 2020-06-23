import {
	Page,
	Nav,
	HeroContainer,
	HeroContent,
	HeroObject,
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
			<div>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
				mollitia illum ab corporis ducimus ipsum soluta! Facere earum nemo
				consequatur assumenda libero laborum, dolorum atque nesciunt! Itaque
				officiis quia recusandae.
			</div>
		</Page>
	);
}

const Navbar = () => {
	return <Nav></Nav>;
};
