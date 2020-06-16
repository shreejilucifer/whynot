import { Grid } from '../../styles/Grid';
import { Table, TableHeader, TableRow } from '../../styles/Content';
import Card from '../Card';

export default function HomeGrid() {
	return (
		<Grid span="70% 30%">
			<Card title="Most Vulnerable Application">
				<Table>
					<TableHeader>
						<span>Application</span>
						<span>Last Test Date</span>
						<span>Critical</span>
						<span>High</span>
						<span>Medium</span>
						<span>Low</span>
						<span>Info</span>
						<span>Severity</span>
					</TableHeader>
					<TableRow>
						<span>
							<p>sappi xyz</p>
							<a>https://sappi.xyz</a>
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
			<Card title="Catalog">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
				dignissimos ut hic, voluptates nobis a ipsum facilis distinctio officia
				libero tempora quisquam autem ratione nemo minus placeat. Reiciendis,
				eligendi sint?
			</Card>
		</Grid>
	);
}
