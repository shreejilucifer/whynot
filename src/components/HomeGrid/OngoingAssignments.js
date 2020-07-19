import Card from '../Card';
import { Table, TableHeader, TableRow } from '../../styles/Content';
import Empty from '../Empty';

const colSpan = '30% 15% 15% 10% 10% 10% 10%';

export default function OngoingAssignments() {
	const x = true;

	return (
		<Card title="Ongoing Assignments">
			{x ? (
				<Empty msg="Add New Assignment" path="/dashboard/add-assignment" />
			) : (
				<Table>
					<TableHeader span={colSpan}>
						<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
							Application
						</span>
						<span>Test Dates</span>
						<span>No of Issues</span>
						<span>Critical</span>
						<span>High</span>
						<span>Medium</span>
						<span>Low</span>
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
					/>
				</Table>
			)}
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
	<TableRow span={colSpan}>
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
	</TableRow>
);
