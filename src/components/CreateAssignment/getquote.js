import {
	Info,
	FormContainer,
	Button,
	Errors,
	SuccessContainer,
	SuccessBtn,
} from '../../styles/Forms';
import { Table, TableHeader, TableRow } from '../../styles/Content';
import { useState } from 'react';

const colSpan = '25% 12% 10% 12% 10% 18% auto';

export default function GetAQuote(props) {
	const [status, setStatus] = useState(props.status);

	if (status === 'done')
		return (
			<React.Fragment>
				<Table>
					<TableHeader span={colSpan}>
						<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
							Assignment
						</span>
						<span>Category</span>
						<span>Date Created</span>
						<span>Created by</span>
						<span>Proposal Date</span>
						<span>WN53 Account Manager</span>
						<span></span>
					</TableHeader>
					<Row
						name="TouchBistro WebApp"
						url="www.touchbistro.com"
						category="Web APP VAPT and Mobile VAPT"
						dateCreated="13 June 2020"
						createdBy="Ranjeet Singh"
						proposalDate="13 June 2020"
						accountManager="Chand Singh"
					/>
				</Table>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<img
						src="/img/file-download.svg"
						alt="Download Report"
						style={{
							height: '70px',
							marginTop: '20px',
							alignSelf: 'center',
						}}
					/>
					<br />
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Button style={{ marginLeft: '0px' }} active={false}>
							Move to Pending
						</Button>
						<Button
							type="submit"
							active={true}
							onClick={() => props.onSubmit()}
						>
							Approve
						</Button>
					</div>
				</div>
			</React.Fragment>
		);
	else
		return (
			<FormContainer>
				<textarea
					style={{ textAlign: 'center', width: '50%', alignSelf: 'center' }}
				>
					The assignment scope is getting reviewed by the Whynot53 Security
					Researchers team. You will get a detailed proposal within the next 24
					hours. This assignment request now has moved to the pending for
					approval.
				</textarea>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: '25px',
					}}
				>
					<Button active={false}>Edit Scope</Button>
					<Button type="submit" active={true} onClick={() => setStatus('done')}>
						OK
					</Button>
				</div>
			</FormContainer>
		);
}

export const Row = ({
	name,
	url,
	category,
	dateCreated,
	createdBy,
	proposalDate,
	accountManager,
	discuss,
}) => (
	<TableRow span={colSpan} style={{ minHeight: '50px' }}>
		<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
			<p>{name}</p>
			<a href={url}>{url}</a>
		</span>
		<span style={{ alignItems: 'center' }}>
			<p style={{ textAlign: 'center' }}>{category}</p>
		</span>
		<span style={{ alignItems: 'flex-start', paddingLeft: '10px' }}>
			{dateCreated}
		</span>
		<span>{createdBy}</span>
		<span>{proposalDate}</span>
		<span>{accountManager}</span>
		<span>
			<button>Discuss</button>
		</span>
	</TableRow>
);
