import { CardLayout, Title, Icon, Content } from '../../styles/Card';

export default function Card({ title, icon, children }) {
	return (
		<CardLayout>
			<Title>
				<span>{title}</span>
				<Icon>{icon}</Icon>
			</Title>
			<Content>{children}</Content>
		</CardLayout>
	);
}
