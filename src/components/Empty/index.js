import { Container, Box, Text } from '../../styles/Empty';

export default function Empty({ msg }) {
	return (
		<Container>
			<Box src="/img/box.svg" alt="Empty" />
			<Text>{msg}</Text>
		</Container>
	);
}
