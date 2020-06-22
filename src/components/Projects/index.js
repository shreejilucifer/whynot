import {
	ProjectsContainer,
	Project,
	Applications,
	NewAppBtn,
} from '../../styles/Projects';
import { TableHeader, TableRow } from '../../styles/Content';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProjectsContent() {
	return (
		<ProjectsContainer>
			<Item />
		</ProjectsContainer>
	);
}

// Use Numbers for multiple open

const Item = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	return (
		<React.Fragment>
			<Project open={open} onClick={() => setOpen(!open)}>
				<div>
					<span>
						<img src="/img/down-arrow.svg" alt="Applications" />
					</span>
				</div>
				<div>
					<span>Sappi</span>
				</div>
				<div>
					<span>0</span>
					<span>Applications</span>
				</div>
				<div>
					<span>0</span>
					<span>Tests/BM</span>
				</div>
				<div>
					<span>0</span>
					<span>Open Vulnerabilities</span>
				</div>
				<div></div>
			</Project>
			{open && (
				<Applications>
					<TableHeader span="25% 25% 15% 10% 10% 10% auto">
						<span>Application Name</span>
						<span>URL</span>
						<span>Test in progress</span>
						<span>T/BM</span>
						<span>Bugs</span>
						<span>Score</span>
					</TableHeader>
					<TableRow
						span="25% 25% 15% 10% 10% 10% auto"
						onClick={() => router.push('/dashboard/application/12345')}
					>
						<span>Sappi XYZ</span>
						<span>sappi.xyz</span>
						<span>Testing</span>
						<span>1</span>
						<span>8</span>
						<span>9/10</span>
					</TableRow>
					<TableRow span="25% 25% 15% 10% 10% 10% auto">
						<span>Sappi XYZ</span>
						<span>sappi.xyz</span>
						<span>Testing</span>
						<span>1</span>
						<span>8</span>
						<span>9/10</span>
					</TableRow>
					<NewAppBtn
						onClick={() => router.push(`/dashboard/create-application/1234`)}
					>
						<span>+</span>
						<span>Add New Application</span>
					</NewAppBtn>
				</Applications>
			)}
		</React.Fragment>
	);
};
