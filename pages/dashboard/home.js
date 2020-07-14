import Page from '@/components/Page';
import Statistics from '@/components/Statistics';
import HomeGrid from '@/components/HomeGrid';

export default function Home() {
	return (
		<Page title="Home">
			<Statistics />
			<HomeGrid />
		</Page>
	);
}
