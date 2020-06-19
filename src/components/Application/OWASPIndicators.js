import Card from '../Card';
import { Table, TableHeader, TableRow } from '../../styles/Content';

export default function OWASPIndicators() {
	return (
		<Card title="OWASP - Top 10 Indicators">
			<Table>
				<TableHeader span="85% 15%" style={{ marginBottom: '0' }}>
					<span>Security Risk</span>
					<span style={{ justifyContent: 'center' }}>Count</span>
				</TableHeader>
				<Item risk="A1 - Injection" count={0} />
				<Item risk="A2 - Broken Authentication" count={0} />
				<Item risk="A3 - Sensitive Data Exposure" count={0} />
				<Item risk="A4 - XML External Entities (XXE)" count={0} />
				<Item risk="A5 - Broken Access Control" count={0} />
				<Item risk="A6 - Security Misconfiguration" count={0} />
				<Item risk="A7 - Cross-Site Scripting (XSS)" count={0} />
				<Item risk="A8 - Insecure Deserialisation" count={0} />
				<Item risk="A9 - Using Components with Known Vulner..." count={0} />
				<Item risk="A10 - Insufficient Logging & monitoring" count={0} />
			</Table>
		</Card>
	);
}

const Item = ({ risk, count }) => {
	return (
		<TableRow span="85% 15%">
			<span style={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}>
				{risk}
			</span>
			<span
				style={{
					paddingTop: '0.5em',
					paddingBottom: '0.5em',
					alignItems: 'center',
				}}
			>
				{count}
			</span>
		</TableRow>
	);
};
