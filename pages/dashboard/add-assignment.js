import Page from '@/components/Page';
import PendingApproval from '@/components/PendingApproval';
import CancelledAssignments from '@/components/CancelledAssignments';
import CreateAssignment from '@/components/CreateAssignment';
import { useEffect } from 'react';
import CompletedAssignments from '@/components/HomeGrid/CompletedAssignments';
import OngoingAssignments from '@/components/HomeGrid/OngoingAssignments';

export default function CreateAssignmentPage() {
	useEffect(() => {
		if (window.location.href.split('#')[1] === 'assign') {
			window.scrollTo(0, 700);
		}
	}, []);

	return (
		<Page title="Add Assignments">
			<CreateAssignment />
			<br />
			<PendingApproval />
			<br />
			<CompletedAssignments />
			<br />
			<OngoingAssignments />
			<br />
			<CancelledAssignments />
		</Page>
	);
}
