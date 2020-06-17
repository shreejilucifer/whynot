import Card from '../Card';
import { Table, TableHeader, TableRow } from '../../styles/Content';

export default function MostVulnerableApplication() {
	return (
		<Card title="Most Vulnerable Application">
			<Table>
				<TableHeader span="20% 15% 10% 10% 10% 10% 10% 15%">
					<span>Application</span>
					<span>Last Test Date</span>
					<span>Critical</span>
					<span>High</span>
					<span>Medium</span>
					<span>Low</span>
					<span>Info</span>
					<span>Severity</span>
				</TableHeader>
				<TableRow span="20% 15% 10% 10% 10% 10% 10% 15%">
					<span>
						<p>sappi xyz</p>
						<a href="#">https://sappi.xyz</a>
					</span>
					<span>05-Jun-2020</span>
					<span>1</span>
					<span>0</span>
					<span>1</span>
					<span>3</span>
					<span>3</span>
					<span>
						<button>Critical</button>
					</span>
				</TableRow>
			</Table>
		</Card>
	);
}
