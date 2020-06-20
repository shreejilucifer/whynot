import { Grid } from '../../styles/Grid';
import { Title, NewProjectBtn } from '../../styles/TitleHeader';
import BreadCrumb from './BreadCrumb';
import { useRouter } from 'next/router';

export default function TitleHeader() {
	const router = useRouter();
	return (
		<div>
			<Grid span="90% 10%">
				<BreadCrumb nav="Home>Applications" />
			</Grid>
			<Grid span="80% 20%">
				<Title>All Projects & Applications</Title>
				<NewProjectBtn onClick={() => router.push('/dashboard/create-project')}>
					<span>
						<img src="/img/newproject.svg" />
					</span>
					<span>New Project</span>
				</NewProjectBtn>
			</Grid>
		</div>
	);
}
