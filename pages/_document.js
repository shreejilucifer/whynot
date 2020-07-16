import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<React.Fragment>
						<meta httpEquiv="Content-Type" content="text/html; charet=utf-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
						></meta>
						<link
							href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
							rel="stylesheet"
						></link>
						<link
							href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
							rel="stylesheet"
						></link>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</React.Fragment>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
