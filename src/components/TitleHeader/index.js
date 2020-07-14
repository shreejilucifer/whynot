import { Grid } from '../../styles/Grid';
import { Title, NewProjectBtn } from '../../styles/TitleHeader';
import BreadCrumb from './BreadCrumb';
import { useRouter } from 'next/router';

export default function TitleHeader() {
	const router = useRouter();
	return (
		<div>
			<Grid span="80% 20%">
				<Title>All Projects & Applications</Title>
				<NewProjectBtn onClick={() => router.push('/dashboard/add-assignment')}>
					<span>
						<img src="/img/plus.svg" />
					</span>
					<span>New Assignment</span>
				</NewProjectBtn>
			</Grid>
		</div>
	);
}

/*
<Grid span="90% 10%">
				<BreadCrumb nav="Home>Applications" />
			</Grid>
*/
