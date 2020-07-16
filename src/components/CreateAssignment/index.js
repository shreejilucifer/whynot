import { useState } from 'react';
import Card from '../Card';
import Start from './start';
import DefineScope from './definescope';
import Schedule from './schedule';
import GetAQuote from './getquote';
import Completion from './completion';
import { useRouter } from 'next/router';
import Progress from './progress';

export default function CreateAssignment() {
	const [stage, setStage] = useState(0);
	const router = useRouter();

	return (
		<React.Fragment>
			<Card title="Add Assignments">
				<Progress percent={stage} />
				{stage === 0 && <Start onSubmit={() => setStage(25)} />}
				{stage === 25 && <DefineScope onSubmit={() => setStage(50)} />}
				{stage === 50 && (
					<GetAQuote onSubmit={() => setStage(75)} status="reviewing" />
				)}
				{stage === 75 && <Schedule onSubmit={() => setStage(100)} />}
				{stage === 100 && (
					<Completion onSubmit={() => router.push('/dashboard/assignments')} />
				)}
			</Card>
		</React.Fragment>
	);
}
