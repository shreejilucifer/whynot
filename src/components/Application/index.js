import BreadCrumb from '../TitleHeader/BreadCrumb';
import { Container, Stat } from '../../styles/Application';
import { Grid } from '../../styles/Grid';

const Name = 'sappi xyz';

export default function Application() {
	return (
		<React.Fragment>
			<BreadCrumb nav={`Home>Projects>${Name}`} />
			<Container>
				<Grid span="25% 25% 23% 23% auto">
					<Stat>
						<img src="/img/projects.svg" alt="Projects" />
						<p>
							<span>sappi xyz</span>
							<a href="#">https://sappi.xyz</a>
							<span>Created On: 05-Jun-2020</span>
						</p>
					</Stat>
					<Stat>
						<img src="/img/tests.svg" alt="Tests" />
						<p>
							<span>1</span>
							<a>Current Month Tests</a>
							<span>Show Result</span>
						</p>
					</Stat>
					<Stat>
						<p>
							<button>Download Report</button>
						</p>
					</Stat>
					<Stat>
						<p style={{ textAlign: 'center', justifyContent: 'center' }}>
							<span style={{ fontSize: '2rem', marginBottom: '.2em' }}>2</span>
							<span>Not Good</span>
						</p>
					</Stat>
					<Stat>
						<p>
							<img src="/img/menu.svg" alt="Menu" />
						</p>
					</Stat>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
