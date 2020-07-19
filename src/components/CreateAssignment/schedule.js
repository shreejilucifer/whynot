import { Table, TableHeader, TableRow } from '../../styles/Content';
import {
	Info,
	FormContainer,
	Button,
	Errors,
	TimeContainer,
} from '../../styles/Forms';

const colSpan = '20% 12% 10% 12% 10% 10% 18% auto';

export default function Schedule(props) {
	return (
		<React.Fragment>
			<React.Fragment>
				<Table>
					<TableHeader span={colSpan}>
						<span style={{ justifyContent: 'flex-start', paddingLeft: '10px' }}>
							Assignment
						</span>
						<span>Category</span>
						<span>Date Created</span>
						<span>Created by</span>
						<span>Approved On</span>
						<span>No of Days</span>
						<span>WN53 Account Manager</span>
						<span></span>
					</TableHeader>
					<Row
						name="TouchBistro WebApp"
						url="www.touchbistro.com"
						category="Web APP VAPT and Mobile VAPT"
						dateCreated="13 June 2020"
						createdBy="Ranjeet Singh"
						approvalDate="13 June 2020"
						accountManager="Chand Singh"
						noofDays={6}
					/>
				</Table>
				<TimeContainer>
					<input type="datetime-local" />
					<p>to</p>
					<input type="datetime-local" />
					<select>
						<option value="">Time Zone</option>
						<option value="GMT +530">GMT +5:30</option>
					</select>
				</TimeContainer>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button style={{ marginLeft: '0px' }} active={false}>
						Skip
					</Button>
					<Button type="submit" active={true} onClick={() => props.onSubmit()}>
						Schedule
					</Button>
				</div>
			</React.Fragment>
		</React.Fragment>
	);
}

export const Row = ({
	name,
	url,
	category,
	dateCreated,
	createdBy,
	approvalDate,
	accountManager,
	noofDays,
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
		<span>{approvalDate}</span>
		<span>{noofDays}</span>
		<span>{accountManager}</span>
		<span>
			<button>Discuss</button>
		</span>
	</TableRow>
);
