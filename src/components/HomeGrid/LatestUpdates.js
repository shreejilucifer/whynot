import Card from '../Card';
import { UpdateContainer } from '../../styles/Content';

export default function LatestUpdates() {
	return (
		<Card title="Latest Updates">
			<UpdateContainer>
				<span>Our updated blog released</span>
				<span>
					Beagle's blog with easy navigation and search option released
				</span>
			</UpdateContainer>
		</Card>
	);
}
