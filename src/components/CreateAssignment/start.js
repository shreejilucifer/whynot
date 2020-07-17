import {
	Info,
	FormContainer,
	Button,
	Errors,
	SuccessContainer,
	SuccessBtn,
} from '../../styles/Forms';
import { Grid } from '../../styles/Grid';
import { Formik } from 'formik';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Start(props) {
	const router = useRouter();
	const [success, setSuccess] = useState(false);

	const validation = (values) => {
		const errors = {};
		if (!values.projectname) {
			errors.projectname = 'Project Name Required';
		} else if (!values.projectdescription) {
			errors.projectdescription = 'Project Description Required';
		}

		return errors;
	};

	const submitForm = (values, { setSubmitting, resetForm }) => {
		console.log(values);
		props.onSubmit();
		setSubmitting(false);
		resetForm();
		setSuccess(true);
	};
	return (
		<Grid span="50% 50%">
			<Info>
				<h3>Create an Assignment</h3>
				<p>
					Each assignment represents a URL. A group of applications is
					collectively known as an assignment. Testing your applications and
					finding vulnerabilities is easier by organizing them into assignments.
				</p>
				<p>Got a query ?</p>
				<button>Let's chat</button>
			</Info>
			{success ? (
				<SuccessContainer>
					<img src="/img/tick.svg" alt="Success" />
					<p>Your Project was created Successfully</p>
					<div>
						<SuccessBtn>Add Application</SuccessBtn>
						<SuccessBtn onClick={() => router.push('/dashboard/projects')}>
							Go to Projects
						</SuccessBtn>
					</div>
				</SuccessContainer>
			) : (
				<Formik
					initialValues={{ projectname: '', projectdescription: '' }}
					validate={validation}
					onSubmit={submitForm}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<FormContainer onSubmit={handleSubmit}>
							<span>Assignment Name</span>
							<input
								type="text"
								placeholder="Example: TouchBistro Web App VAPT"
								name="projectname"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.projectname}
							/>
							<span>Description</span>
							<textarea
								placeholder="Example: Thorough security tests against the latest TouchBistro web application especially 'OWASP Top Ten Attacks 2017' (no 'A7') & Vulnerabilities."
								name="projectdescription"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.projectdescription}
							/>
							<Errors>
								{errors.projectname &&
									touched.projectname &&
									errors.projectname}
								{errors.projectdescription &&
									touched.projectdescription &&
									errors.projectdescription}
							</Errors>
							<div>
								<Button
									onClick={() => router.push('/dashboard/projects')}
									active={false}
								>
									Cancel
								</Button>
								<Button type="submit" disabled={isSubmitting} active={true}>
									{isSubmitting ? 'Adding...' : 'Create'}
								</Button>
							</div>
						</FormContainer>
					)}
				</Formik>
			)}
		</Grid>
	);
}
