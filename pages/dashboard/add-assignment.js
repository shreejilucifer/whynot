import Page from '../../src/components/Page';

import PendingApproval from '../../src/components/PendingApproval';
import CancelledAssignments from '../../src/components/CancelledAssignments';
import CreateAssignment from '../../src/components/CreateAssignment';

export default function CreateAssignmentPage() {
	return (
		<Page title="Add Assignments">
			<CreateAssignment />
			<PendingApproval />
			<CancelledAssignments />
		</Page>
	);
}
