import {
	Container,
	Item,
	Icon,
	Data,
	Numbers,
	Legend,
	Button,
} from '../../styles/Stats';

export default function Statistics() {
	return (
		<Container>
			<Item>
				<Icon>
					<img src="/img/projects.svg" />
				</Icon>
				<Data>
					<Numbers>4</Numbers>
					<Legend>Projects</Legend>
				</Data>
			</Item>
			<Item>
				<Icon>
					<img src="/img/applications.svg" />
				</Icon>
				<Data>
					<Numbers>3</Numbers>
					<Legend>Applications</Legend>
				</Data>
			</Item>
			<Item>
				<Icon>
					<img src="/img/tests.svg" />
				</Icon>
				<Data>
					<Numbers>
						1 <span>/1</span>
					</Numbers>
					<Legend>Tests/Billing Month</Legend>
				</Data>
			</Item>
			<Item>
				<Icon>
					<img src="/img/vulnerabilities.svg" />
				</Icon>
				<Data>
					<Numbers>8</Numbers>
					<Legend>Open Vulnerabilities</Legend>
				</Data>
			</Item>
			<Item>
				<Button>
					<span>
						<img src="/img/applications.svg" />
					</span>
					<span>New Application</span>
				</Button>
			</Item>
		</Container>
	);
}
