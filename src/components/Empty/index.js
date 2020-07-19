import { Container, Box, Text } from '../../styles/Empty';
import Link from 'next/link';

export default function Empty({ msg, path }) {
	return (
		<Container>
			<Box src="/img/dashboard/box.svg" alt="Empty" />
			<Link href={path}>
				<Text>{msg}</Text>
			</Link>
		</Container>
	);
}
