import { Grid } from '../../styles/Grid';
import {
	Table,
	TableHeader,
	TableRow,
	CatalogContainer,
	CatalogRingDetails,
	LegendContainer,
} from '../../styles/Content';
import Card from '../Card';
import {
	PieChart,
	Pie,
	Cell,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';
import Empty from '../Empty';

const data = [
	{ name: 'New', value: 8 },
	{ name: 'Reopened', value: 0 },
	{ name: 'Not Fixed', value: 0 },
	{ name: 'Fixed', value: 0 },
];

const COLORS = ['#FFAA00', '#002E63', '#EB0000', '#8CC63F'];

const databar = [
	{
		name: 'Score A',
		uv: 2.0,
	},
];

export default function HomeGrid() {
	return (
		<React.Fragment>
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
				<Card title="Catalog">
					<CatalogContainer>
						<PieChart width={200} height={200}>
							<Pie
								data={data}
								cx={100}
								cy={100}
								innerRadius={60}
								outerRadius={80}
								fill="#8884d8"
								paddingAngle={0}
								dataKey="value"
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
						</PieChart>
						<CatalogRingDetails>
							<div>
								<div /> Total
							</div>
							<h2>8</h2>
							<p>vulnerabilities</p>
						</CatalogRingDetails>
					</CatalogContainer>
					<LegendContainer colors={COLORS}>
						<span>
							<div />
							<p>8 - New</p>
						</span>
						<span>
							<div />
							<p>0 - Reopened</p>
						</span>
						<span>
							<div />
							<p>0 - Not Fixed</p>
						</span>
						<span>
							<div />
							<p>0 - Fixed</p>
						</span>
					</LegendContainer>
				</Card>
			</Grid>
			<Grid span="25% 50% 25%">
				<Card title="Least Vulnerable Application">
					<BarChart
						width={300}
						height={400}
						barSize={20}
						data={databar}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="uv" fill="#82ca9d" />
					</BarChart>
				</Card>
				<Card title="Tests in Progress">
					<Empty msg="No tests in progress." />
				</Card>
				<Card title="Latest Reports"></Card>
			</Grid>
		</React.Fragment>
	);
}
