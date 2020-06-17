import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
	}

	body {
		color: #48486e;
	}
`;

const theme = {
	colors: {
		black: '#48486e',
		white: '#ffffff',
		primary: '#48486e',
		secondary: '#34b3d3',
		danger: '#f24747',
		background: '#f2f4f8',
	},
	fonts: {
		primary: `'Roboto', sans-serif`,
	},
	sizes: {},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
