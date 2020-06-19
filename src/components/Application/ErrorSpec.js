import { Grid } from '../../styles/Grid';
import { ErrorItem } from '../../styles/Application';

const COLORS = ['#f24747', '#4cae4c', '#ee9336', '#357abd', '#fdc431'];

export default function ErrorSpec() {
	return (
		<Grid span="16.66% 16.66% 16.66% 16.66% 16.66% 16.66%">
			<ErrorItem color="#f24747">
				<span>1</span>
				<span>Critical</span>
			</ErrorItem>
			<ErrorItem color="#4cae4c">
				<span>0</span>
				<span>High</span>
			</ErrorItem>
			<ErrorItem color="#ee9336">
				<span>1</span>
				<span>Medium</span>
			</ErrorItem>
			<ErrorItem color="#357abd">
				<span>3</span>
				<span>Low</span>
			</ErrorItem>
			<ErrorItem color="#fdc431">
				<span>3</span>
				<span>Info</span>
			</ErrorItem>
			<ErrorItem dark={true} color="#f2f4f8">
				<span>8</span>
				<span>Total</span>
			</ErrorItem>
		</Grid>
	);
}
