import {
	Container,
	Info,
	FormContainer,
	Button,
	Errors,
	SuccessContainer,
	SuccessBtn,
} from '../../styles/Forms';
import { Grid } from '../../styles/Grid';
import BreadCrumb from '../TitleHeader/BreadCrumb';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CreateApplication() {
	const router = useRouter();
	const [success, setSuccess] = useState(false);

	const validation = (values) => {
		const errors = {};
		if (!values.projectname) {
			errors.projectname = 'Project Name Required';
		} else if (!values.applicationname) {
			errors.applicationname = 'Application Name Required';
		} else if (!values.applicationdomain) {
			errors.applicationdomain = 'Application Domain Required';
		}

		return errors;
	};

	const submitForm = (values, { setSubmitting, resetForm }) => {
		console.log(values);
		setSubmitting(false);
		resetForm();
		setSuccess(true);
	};

	return (
		<React.Fragment>
			<BreadCrumb nav="Home>Projects>Create Application" />
			<Container>
				<Grid span="50% 50%">
					<Info>
						<h1>Create Application</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
							tempora dolor eius repudiandae recusandae est corrupti minus ea
							eveniet nostrum harum saepe nobis architecto, iure magni a quos
							ullam necessitatibus.
						</p>
						<img src="/img/applications.svg" alt="Applications" />
					</Info>
					{success ? (
						<SuccessContainer>
							<img src="/img/tick.svg" alt="Success" />
							<p>Your Application was created Successfully</p>
							<div>
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
									<span>Project Name</span>
									<input
										type="text"
										placeholder="Example: Corporate"
										name="projectname"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.projectname}
									/>
									<span>Application Name</span>
									<input
										type="text"
										placeholder="Example: Admin Portal"
										name="applicationname"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.applicationname}
									/>
									<span>Application URL</span>
									<input
										type="text"
										placeholder="Example: https://yourproject.com"
										name="applicationdomain"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.applicationdomain}
									/>
									<Errors>
										{errors.projectname &&
											touched.projectname &&
											errors.projectname}
										{errors.applicationname &&
											touched.applicationname &&
											errors.applicationname}
										{errors.applicationdomain &&
											touched.applicationdomain &&
											errors.applicationdomain}
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
			</Container>
		</React.Fragment>
	);
}
