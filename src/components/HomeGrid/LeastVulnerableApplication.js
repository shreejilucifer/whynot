import Card from '../Card';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const databar = [
	{
		name: 'Score A',
		uv: 2.0,
	},
];

export default function LeastVulnerableApplication() {
	return (
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
	);
}
