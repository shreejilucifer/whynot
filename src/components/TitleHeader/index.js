import { Grid } from '../../styles/Grid';
import { Title, NewProjectBtn } from '../../styles/TitleHeader';
import BreadCrumb from './BreadCrumb';

export default function TitleHeader() {
	return (
		<div>
			<Grid span="90% 10%">
				<BreadCrumb nav="Home>Applications" />
			</Grid>
			<Grid span="80% 20%">
				<Title>All Projects & Applications</Title>
				<NewProjectBtn>
					<span>
						<img src="/img/newproject.svg" />
					</span>
					<span>New Project</span>
				</NewProjectBtn>
			</Grid>
		</div>
	);
}
