import Page from '../../src/components/Page';

import PendingApproval from '../../src/components/PendingApproval';
import CancelledAssignments from '../../src/components/CancelledAssignments';
// import CreateProject from '../../src/components/CreateProject';

export default function CreateAssignmentPage() {
	return (
		<Page title="Add Assignments">
			<PendingApproval />
			<CancelledAssignments />
		</Page>
	);
}
