import Card from '../Card';
import Empty from '../Empty';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Table, TableHeader, TableRow } from '../../styles/Content';

export default function ScheduledTests() {
	return (
		<Card
			title="Scheduled Tests"
			icon={
				<Link href="/dashboard/addscheduledtest">
					<a>
						<img src="/img/add.svg" alt="Add Scheduled Test" />
					</a>
				</Link>
			}
		>
			<Table>
				<TableHeader span="40% 30% auto">
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						Assignment
					</span>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						Dates
					</span>
					<span></span>
				</TableHeader>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					testDateStart="16 August 2020"
					testDateEnd="24 August 2020"
					detailsUrl="/dashboard/home/scheduled-test-details/1"
				/>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					testDateStart="16 August 2020"
					testDateEnd="24 August 2020"
					detailsUrl="/dashboard/home/scheduled-test-details/2"
				/>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					testDateStart="16 August 2020"
					testDateEnd="24 August 2020"
					detailsUrl="/dashboard/home/scheduled-test-details/3"
				/>
			</Table>
		</Card>
	);
}

export const Row = ({ name, url, testDateStart, testDateEnd, detailsUrl }) => {
	const router = useRouter();

	return (
		<TableRow span="40% 30% auto">
			<span
				style={{
					alignItems: 'flex-start',
					paddingLeft: '10px',
					fontSize: '0.6rem',
				}}
			>
				<p>{name}</p>
				<a href={url}>{url}</a>
			</span>
			<span style={{ alignItems: 'center' }}>
				<p style={{ fontSize: '0.75rem' }}>{testDateStart}</p>
				<p style={{ fontSize: '0.75rem' }}>to</p>
				<p style={{ fontSize: '0.75rem' }}>{testDateEnd}</p>
			</span>
			<span>
				<button onClick={() => router.push(`${detailsUrl}`)}>Details</button>
			</span>
		</TableRow>
	);
};

/*

	<Empty msg="Scheduled scan not found" />

*/
