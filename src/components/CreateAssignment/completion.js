import {
	Info,
	FormContainer,
	Button,
	Errors,
	SuccessContainer,
	SuccessBtn,
} from '../../styles/Forms';
import { Label } from 'src/landing-components/SiteStats';

export default function Completion(props) {
	return (
		<FormContainer>
			<Label style={{ textAlign: 'center', color: 'green' }}>
				Congratulations you have succesfully added an assignment !
			</Label>
			<textarea
				style={{ textAlign: 'center', width: '50%', alignSelf: 'center' }}
			>
				Now you can manage all approved assignments on the 'Assignments' tab.
				For any queries please contact your account manager. We are really
				excited to work with you and look forward to the 'Assignment Day'.
				Cheers!
			</textarea>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: '25px',
				}}
			>
				<Button
					active={false}
					onClick={() => router.push('/dashboard/add-assignment')}
				>
					Add New Assignment
				</Button>
				<Button type="submit" active={true} onClick={() => props.onSubmit()}>
					Go to Assignments Tab
				</Button>
			</div>
		</FormContainer>
	);
}
