import Page from '@/components/Page';
import PendingApproval from '@/components/PendingApproval';
import CancelledAssignments from '@/components/CancelledAssignments';
import CreateAssignment from '@/components/CreateAssignment';

export default function CreateAssignmentPage() {
	return (
		<Page title="Add Assignments">
			<CreateAssignment />
			<PendingApproval />
			<CancelledAssignments />
		</Page>
	);
}
