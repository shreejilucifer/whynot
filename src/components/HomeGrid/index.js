import { Grid } from '../../styles/Grid';
import OngoingAssignments from './OngoingAssignments';
import MostRecentAssignmentTestSummary from './MostRecentAssignmentTestSummary';
import ScheduledTests from './ScheduledTests';

export default function HomeGrid() {
	return (
		<React.Fragment>
			<Grid span="70% 30%">
				<OngoingAssignments />
				<ScheduledTests />
			</Grid>
			<Grid span="100%">
				<MostRecentAssignmentTestSummary />
			</Grid>
		</React.Fragment>
	);
}
