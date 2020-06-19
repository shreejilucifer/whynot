import {
	CatalogContainer,
	CatalogRingDetails,
	LegendContainer,
} from '../../styles/Content';
import { PieChart, Pie, Cell } from 'recharts';
import Card from '../Card';

const data = [
	{ name: 'New', value: 8 },
	{ name: 'Reopened', value: 0 },
	{ name: 'Not Fixed', value: 0 },
	{ name: 'Fixed', value: 0 },
];

const COLORS = ['#FFAA00', '#002E63', '#EB0000', '#8CC63F'];

export default function Catalog() {
	return (
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
	);
}
