import Link from 'next/link';

export default function IndexPage() {
	return (
		<div>
			<Link href="/dashboard/home">
				<a>Dashboard</a>
			</Link>
		</div>
	);
}
