import Card from '../Card';
import { Table, TableHeader, TableRow } from '../../styles/Content';

export default function MostRecentAssignmentTestSummary() {
	return (
		<Card title="Most Recent Assignment Test Summary">
			<Table>
				<TableHeader span="25% 12% 12% 8% 8% 9% 7% 8% 11%">
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						Application
					</span>
					<span>Test Dates</span>
					<span>No of Issues</span>
					<span>Critical</span>
					<span>High</span>
					<span>Medium</span>
					<span>Low</span>
					<span>Report</span>
					<span>Status</span>
				</TableHeader>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					testDateStart="12 May 2020"
					testDateEnd="18 May 2020"
					noOfIssues={16}
					critical={5}
					high={4}
					medium={2}
					low={5}
					reportUrl=""
					status="Fix in progress"
				/>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					testDateStart="02 May 2020"
					testDateEnd="08 May 2020"
					noOfIssues={28}
					critical={8}
					high={6}
					medium={7}
					low={6}
					reportUrl=""
					status="Completed"
				/>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					testDateStart="02 May 2020"
					testDateEnd="08 May 2020"
					noOfIssues={28}
					critical={8}
					high={6}
					medium={7}
					low={6}
					reportUrl=""
					status="Post fix review in progress"
				/>
			</Table>
		</Card>
	);
}

export const Row = ({
	name,
	url,
	testDateStart,
	testDateEnd,
	noOfIssues,
	critical,
	high,
	medium,
	low,
	reportUrl,
	status,
}) => (
	<TableRow span="25% 12% 12% 8% 8% 9% 7% 8% 11%">
		<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
			<p>{name}</p>
			<a href={url}>{url}</a>
		</span>
		<span style={{ alignItems: 'center' }}>
			<p>{testDateStart}</p>
			<p>to</p>
			<p>{testDateEnd}</p>
		</span>
		<span>{noOfIssues}</span>
		<span>{critical}</span>
		<span>{high}</span>
		<span>{medium}</span>
		<span>{low}</span>
		<span>
			<img src="/img/file-download.svg" style={{ height: '40px' }} />
		</span>
		<span>
			<p style={{ textAlign: 'center' }}>{status}</p>
		</span>
	</TableRow>
);
