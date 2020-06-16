import Page from '../../src/components/Page';
import Statistics from '../../src/components/Statistics';
import HomeGrid from '../../src/components/HomeGrid';

export default function Home() {
	return (
		<Page title="Home">
			<Statistics />
			<HomeGrid />
		</Page>
	);
}
