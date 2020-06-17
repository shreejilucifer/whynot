import { BreadCrumbContainer } from '../../styles/TitleHeader';

import { useRouter } from 'next/router';

export default function BreadCrumb({ nav }) {
	const router = useRouter();
	const str = nav.split('>');
	return (
		<BreadCrumbContainer>
			{str &&
				str.map((link, i) => (
					<React.Fragment>
						<span key={i}>{link}</span>
						{i !== str.length - 1 ? <span>{'>'}</span> : null}
					</React.Fragment>
				))}
		</BreadCrumbContainer>
	);
}
