import Card from '../Card';
import { Table, TableHeader, TableRow } from '../../styles/Content';

const colSpan = '25% 10% 15% auto';

export default function CancelledAssignments() {
	return (
		<React.Fragment>
			<br />
			<Card title="Cancelled Assignments">
				<Table>
					<TableHeader span={colSpan}>
						<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
							Assignments
						</span>
						<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
							Cancelled Date
						</span>
						<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
							Reason
						</span>
						<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
							Proposal
						</span>
					</TableHeader>
					<Row
						name="TouchBistro WebApp"
						url="www.touchbistro.com"
						cancelledDate="13 June 2020"
						reason="Scope Discussion"
					/>
					<Row
						name="TouchBistro WebApp"
						url="www.touchbistro.com"
						cancelledDate="13 June 2020"
						reason="Price Negotiation"
					/>
					<Row
						name="TouchBistro WebApp"
						url="www.touchbistro.com"
						cancelledDate="13 June 2020"
						reason="Resource Planning"
					/>
					<Row
						name="TouchBistro WebApp"
						url="www.touchbistro.com"
						cancelledDate="13 June 2020"
						reason="Scope Discussion"
					/>
				</Table>
			</Card>
		</React.Fragment>
	);
}

export const Row = ({
	name,
	url,
	cancelledDate,
	reason,
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
			<p>{cancelledDate}</p>
		</span>
		<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
			{reason}
		</span>
		<span
			style={{
				display: 'grid',
				gridTemplateColumns: '25% 25% 25% 25%',
			}}
		>
			<img
				src="/img/file-download.svg"
				alt="Download Proposal"
				style={{ height: '40px', paddingLeft: '10px' }}
			/>
			<div>Details</div>

			<button>Discuss</button>
			<button>Approve</button>
		</span>
	</TableRow>
);
