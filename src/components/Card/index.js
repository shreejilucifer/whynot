import { CardLayout, Title, Content } from '../../styles/Card';

export default function Card({ title, children }) {
	return (
		<CardLayout>
			<Title>{title}</Title>
			<Content>{children}</Content>
		</CardLayout>
	);
}
