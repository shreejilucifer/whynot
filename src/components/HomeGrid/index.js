import { Grid } from '../../styles/Grid';
import MostRecentAssignmentTestSummary from './MostRecentAssignmentTestSummary';
import ScheduledTests from './ScheduledTests';

import Catalog from './Catalog';
import LeastVulnerableApplication from './LeastVulnerableApplication';
import TestsInProgress from './TestsInProgress';
import LatestReports from './LatestReports';
import LatestUpdates from './LatestUpdates';
import PlanDetails from './PlanDetails';

export default function HomeGrid() {
	return (
		<React.Fragment>
			<Grid span="70% 30%">
				<MostRecentAssignmentTestSummary />
				<ScheduledTests />
			</Grid>
		</React.Fragment>
	);
}

/*

			<Grid span="25% 50% 25%">
				<LeastVulnerableApplication />
				<TestsInProgress />
				<LatestReports />
			</Grid>
			<Grid span="40% 35% 25%">
				<LatestUpdates />
				<PlanDetails />
			</Grid>
*/
