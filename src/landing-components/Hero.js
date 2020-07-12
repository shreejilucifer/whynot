import styled from 'styled-components';
import { Container } from './CommonStyles';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

export const HeroSection = styled.div`
	background-color: #fafbfb;
	padding-bottom: 50px;
	border-bottom: 2px solid #e1e1e1;
`;

export const HeroContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.black};
	padding-top: 190px;
`;

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.landing};
	font-weight: 500;
	text-align: center;
	font-size: 40px;
`;

export const SubTitle = styled.h4`
	font-family: ${(props) => props.theme.fonts.landing};
	text-align: center;
	font-weight: 500;
	margin-top: 15px;
	color: #737373;
	letter-spacing: 0;
	width: 80%;
	line-height: 30px;
`;

export const FormContainer = styled.form`
	width: 80%;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: 0 6px 30px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	margin-top: 40px;
	padding: 45px;

	@media only screen and (max-width: 768px) {
		width: 95%;
	}

	@media only screen and (max-width: 425px) {
		padding: 20px;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;

	& > input {
		border-left: 1px solid #ff916f;
		border-top: 1px solid #ff916f;
		border-bottom: 1px solid #ff916f;
		border-right: none;
		border-radius: 3px 0 0 3px;
		height: 50px;
		width: 75%;
		font-size: 18px;
		padding-left: 15px;
		outline: none;
		font-family: ${(props) => props.theme.fonts.landing};
		font-weight: 400;

		&::placeholder {
			color: rgba(0, 0, 0, 0.3);
		}
	}
	& > button {
		height: 50px;
		width: 25%;
		border: none;
		border-radius: 0 3px 3px 0;
		font-size: 18px;
		font-family: ${(props) => props.theme.fonts.landing};
		background-color: ${(props) => props.theme.colors.orange};
		color: ${(props) => props.theme.colors.white};
		outline: none;
		&:hover {
			cursor: pointer;
			background-color: ${(props) => props.theme.colors.darkorange};
		}
	}

	@media only screen and (max-width: 425px) {
		flex-direction: column;

		& > input {
			width: 100%;
			border-right: 1px solid #ff916f;
			border-bottom: none;
			border-radius: 3px 3px 0 0;
		}
		& > button {
			width: 100%;
			border-radius: 0 0 3px 3px;
		}
	}
`;

export const FormSubTitle = styled.p`
	margin-top: 20px;
	font-family: ${(props) => props.theme.fonts.landing};
	color: #888;
	font-weight: 400;
	font-size: 15px;
`;

export const CompaniesTitle = styled.p`
	text-align: center;
	margin-top: 100px;
	font-family: ${(props) => props.theme.fonts.landing};
	color: rgba(0, 0, 0, 0.5);
	& > span {
		color: rgba(0, 0, 0, 0.8);
	}
`;

export const CompanyGrid = styled.div`
	margin-top: 40px;
	width: 100%;
	display: grid;
	grid-template-columns: 20% 20% 20% 20% 20%;
	& > img {
		margin: auto;
		width: 60%;
		opacity: 0.3;
	}

	@media only screen and (max-width: 425px) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		& > img {
			width: auto;
			height: 40px;
			margin-bottom: 10px;
			margin-top: 10px;
			&:nth-child(4) {
				display: none;
			}
		}
	}
`;

export const Hero = () => {
	const router = useRouter();

	const validation = (values) => {
		const errors = {};
		if (!values.url) {
			errors.url = 'URL Required';
		}

		return errors;
	};

	const submitForm = (values, { setSubmitting, resetForm }) => {
		router.push(`/site/${values.url}`);
	};

	return (
		<HeroSection>
			<HeroContainer>
				<Title>You are at the center of Security</Title>
				<SubTitle>
					Whynot53 is a group of security researchers who have been working with
					many businesses of different industries and of different sizes across
					the world by providing exceptional security services.
				</SubTitle>
				<Formik
					initialValues={{ url: '' }}
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
							<InputContainer>
								<input
									type="text"
									placeholder="company.com"
									name="url"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.url}
								/>
								<button type="submit" disabled={isSubmitting}>
									Get Started
								</button>
							</InputContainer>
							<div style={{ color: 'red', fontSize: '10px' }}>
								{errors.url && touched.url && errors.url}
							</div>
							<FormSubTitle>
								Enter your domain name/URL to launch the security search. For
								example, whynot53.com
							</FormSubTitle>
						</FormContainer>
					)}
				</Formik>

				<CompaniesTitle>
					Whynot53 researchers have reported <span>8,300+ vulnerabilities</span>{' '}
					across <span>2000+ companies</span> and counting.
				</CompaniesTitle>
				<CompanyGrid>
					<img src="/img/landing/adobe.png" alt="Adobe" />
					<img src="/img/landing/invision.png" alt="InVision" />
					<img src="/img/landing/microsoft.png" alt="Microsoft" />
					<img src="/img/landing/ibm.png" alt="IBM" />
					<img src="/img/landing/google.png" alt="Google" />
				</CompanyGrid>
			</HeroContainer>
		</HeroSection>
	);
};
