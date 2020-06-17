import Card from '../Card';
import { ReportContainer } from '../../styles/Content';

export default function LatestReports() {
	return (
		<Card title="Latest Reports">
			<ReportContainer>
				<div>
					<img src="/img/report.svg" alt="Project" />
				</div>
				<div>
					<span>sappi xyz</span>
					<span>https://sappi.xyz</span>
				</div>
				<div>
					<span>06-Jun-2020</span>
				</div>
			</ReportContainer>
		</Card>
	);
}
