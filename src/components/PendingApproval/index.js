import Card from '../Card';
import { Table, TableHeader, TableRow } from '../../styles/Content';

const colSpan = '25% 10% 15% auto';

export default function PendingApproval() {
	return (
		<Card title="Pending For Approval">
			<Table>
				<TableHeader span={colSpan}>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						Assignments
					</span>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						Date Created
					</span>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						Status
					</span>
					<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
						Proposal
					</span>
				</TableHeader>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					dateCreated="13 June 2020"
					status="Scope Discussion"
				/>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					dateCreated="13 June 2020"
					status="Price Negotiation"
				/>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					dateCreated="13 June 2020"
					status="Resource Planning"
				/>
				<Row
					name="TouchBistro WebApp"
					url="www.touchbistro.com"
					dateCreated="13 June 2020"
					status="Scope Discussion"
				/>
			</Table>
		</Card>
	);
}

export const Row = ({
	name,
	url,
	dateCreated,
	status,
	details,
	edit,
	cancel,
	discuss,
	approve,
}) => (
	<TableRow span={colSpan} style={{ minHeight: '50px' }}>
		<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
			<p>{name}</p>
			<a href={url}>{url}</a>
		</span>
		<span style={{ alignItems: 'center' }}>
			<p>{dateCreated}</p>
		</span>
		<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
			{status}
		</span>
		<span
			style={{
				display: 'grid',
				gridTemplateColumns: '16.66% 16.66% 16.66% 16.66% 16.66% 16.66%',
			}}
		>
			<img
				src="/img/file-download.svg"
				alt="Download Proposal"
				style={{ height: '40px', paddingLeft: '10px' }}
			/>
			<div>Details</div>
			<div>Edit</div>
			<div>Cancel</div>
			<div>Discuss</div>
			<button>Approve</button>
		</span>
	</TableRow>
);
