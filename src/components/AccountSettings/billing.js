import { Grid } from '@/styles/Grid';
import { Container, Title, SubTitle, Billing } from '@/styles/Settings';
import Sidebar from './sidebar';
import { Table, TableRow } from '@/styles/Content';

export default function AccountSettingsBilling() {
	return (
		<React.Fragment>
			<Grid span="30% auto">
				<Sidebar />
				<BillingSection />
			</Grid>
		</React.Fragment>
	);
}

const colSpan = '25% 50% auto';

export const BillingSection = () => {
	return (
		<Container>
			<Title>
				<span>Billing & invoices</span>
			</Title>
			<Billing>
				<div>
					<h3>Billing Information</h3>
					<p>
						<span>WHYNOT53 TECHNOLOGIES PRIVATE LIMITED</span>
						<span>
							Flat No: 308, 3rd Floor, Megha Maanay Apartments Omkar Layout Dr.
							Vishnuvardhan Main Road, Rajarajeshwari Nagar
						</span>
						<span>560059 BANGALORE - IN</span>
					</p>
					<p>The invoices are sent to naveenct34@gmail.com.</p>
				</div>
				<div style={{ paddingLeft: '20px' }}>
					<h3>Payment card</h3>

					<p>
						<span>NAVEEN C T VISA 6889</span>
						<span>Expiration: 10 / 2022</span>
					</p>
					<p>
						<u>Delete</u>
					</p>
				</div>
			</Billing>
			<Title>
				<span>My invoices</span>
			</Title>
			<SubTitle>
				<span>
					Please allow up to 24 hours for your new invoices to be available.
				</span>
			</SubTitle>
			<Table style={{ marginTop: '15px' }}>
				<TableRow span={colSpan}>
					<span>AB292A4-0010</span>
					<span>$24.50</span>
					<span
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
						}}
					>
						<a href="https://google.com" style={{ marginRight: '10px' }}>
							Invoice
						</a>
						<a href="https://google.com" style={{ marginRight: '10px' }}>
							Receipt
						</a>
					</span>
				</TableRow>
				<TableRow span={colSpan}>
					<span>AB292A4-0010</span>
					<span>$24.50</span>
					<span
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
						}}
					>
						<a href="https://google.com" style={{ marginRight: '10px' }}>
							Invoice
						</a>
						<a href="https://google.com" style={{ marginRight: '10px' }}>
							Receipt
						</a>
					</span>
				</TableRow>
				<TableRow span={colSpan}>
					<span>AB292A4-0010</span>
					<span>$24.50</span>
					<span
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-end',
						}}
					>
						<a href="https://google.com" style={{ marginRight: '10px' }}>
							Invoice
						</a>
						<a href="https://google.com" style={{ marginRight: '10px' }}>
							Receipt
						</a>
					</span>
				</TableRow>
			</Table>
		</Container>
	);
};
