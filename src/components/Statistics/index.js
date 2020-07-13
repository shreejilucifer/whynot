import {
	Container,
	Item,
	Icon,
	Data,
	Numbers,
	Legend,
	Button,
} from '../../styles/Stats';
import { useRouter } from 'next/router';

export default function Statistics() {
	const router = useRouter();

	return (
		<Container>
			<Item>
				<Icon>
					<img src="/img/mobile-app.svg" />
				</Icon>
				<Data>
					<Numbers>4</Numbers>
					<Legend>Applications</Legend>
				</Data>
			</Item>
			<Item>
				<Icon>
					<img src="/img/collaborate.svg" />
				</Icon>
				<Data>
					<Numbers>2</Numbers>
					<Legend>Work In Progress</Legend>
				</Data>
			</Item>
			<Item>
				<Icon>
					<img src="/img/analysis.svg" />
				</Icon>
				<Data>
					<Numbers>36</Numbers>
					<Legend>Reports</Legend>
				</Data>
			</Item>
			<Item>
				<Icon>
					<img src="/img/bug.svg" />
				</Icon>
				<Data>
					<Numbers>8</Numbers>
					<Legend>Open Vulnerabilities</Legend>
				</Data>
			</Item>
			<Item>
				<Button
					onClick={() => router.push('/dashboard/create-application/new')}
				>
					<span>
						<img src="/img/plus.svg" />
					</span>
					<span>New Application</span>
				</Button>
			</Item>
		</Container>
	);
}
