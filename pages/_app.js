import App from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import 'react-step-progress-bar/styles.css';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
	}

	body::-webkit-scrollbar {
		display: none;
	}

	body::-webkit-scrollbar-track {
		display: none;
	}

	body::-webkit-scrollbar-thumb {
		display: none;
	}
`;

const theme = {
	colors: {
		black: '#000000',
		white: '#ffffff',
		gray: '#e6e6e6',
		primary: '#48486e',
		// primary: '#FF5722',
		secondary: '#FF5722',
		danger: '#f24747',
		background: '#f2f4f8',
		tertiary: '#34b3d3',
		orange: '#f6416c',
		darkorange: '#FA2254',
	},
	fonts: {
		primary: `'Open Sans', sans-serif`,
		landing: `'Roboto', sans-serif`,
		// landing: `'Open Sans', sans-serif`,
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
