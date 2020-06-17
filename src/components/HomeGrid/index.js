import { Grid } from '../../styles/Grid';
import MostVulnerableApplication from './MostVulnerableApplication';
import Catalog from './Catalog';
import LeastVulnerableApplication from './LeastVulnerableApplication';
import TestsInProgress from './TestsInProgress';
import LatestReports from './LatestReports';
import ScheduledTests from './ScheduledTests';
import LatestUpdates from './LatestUpdates';
import PlanDetails from './PlanDetails';

export default function HomeGrid() {
	return (
		<React.Fragment>
			<Grid span="70% 30%">
				<MostVulnerableApplication />
				<Catalog />
			</Grid>
			<Grid span="25% 50% 25%">
				<LeastVulnerableApplication />
				<TestsInProgress />
				<LatestReports />
			</Grid>
			<Grid span="40% 35% 25%">
				<ScheduledTests />
				<LatestUpdates />
				<PlanDetails />
			</Grid>
		</React.Fragment>
	);
}
