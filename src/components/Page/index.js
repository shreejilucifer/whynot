import { Layout, Content } from '../../styles/Page';
import Navbar from '../Navbar';
import Head from 'next/head';
import Footer from '../Footer';

const Page = ({ title, children }) => {
	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			<Content>{children}</Content>
		</Layout>
	);
};

export default Page;
