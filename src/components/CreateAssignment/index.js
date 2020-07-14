import { useState } from 'react';
import Card from '../Card';
import Start from './start';
import DefineScope from './definescope';
import Schedule from './schedule';
import GetAQuote from './getquote';

export default function CreateAssignment() {
	const [stage, setStage] = useState(3);

	return (
		<React.Fragment>
			<Card title="Add Assignments">
				{stage === 0 && <Start onSubmit={() => setStage(1)} />}
				{stage === 1 && <DefineScope onSubmit={() => setStage(2)} />}
				{stage === 2 && (
					<GetAQuote onSubmit={() => setStage(3)} status="reviewing" />
				)}
				{stage === 3 && <Schedule onSubmit={() => setStage(4)} />}
			</Card>
		</React.Fragment>
	);
}
