import React from 'react';
import { Provider, Box } from 'rendition';
import { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import FAQs from './FAQs';
import Social from './Social';
import Forum from './Forum';
import HelpSection from './HelpSection';
import GetStarted from './GetStarted';
import DeviceMap from './DeviceMap';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}
  body {
    margin: 0
  }
`;

const App = () => {
	return (
		<Provider
			theme={
				{
					colors: {
						primary: { main: '#63ba97', light: '#dcf0ea' },
						text: { main: '#333' },
						border: { dark: '#63ba97', light: '#dcf0ea' },
					},
					fontSizes: [12, 14, 16, 18, 20, 26, 38, 48],
					font: `-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
					radius: 0,
					button: { border: { radius: 0 } },
					tabs: { gap: 'xxsmall' },
					tab: {
						border: {
							size: 'small',
							color: { light: '#dcf0ea' },
							active: { color: { light: '#63ba97' } },
							hover: {
								color: { light: '#63ba97' },
							},
						},
						active: { fontWeight: 'bold', color: 'black' },
						hover: { fontWeight: 'bold', color: 'black' },
						margin: { horizontal: 'small' },
					},
				} as any
			}
		>
			<Header />
			<GlobalStyle />
			<Box color="text.main">
				<DeviceMap />
				<HelpSection />
				<GetStarted />
				<Forum />
				<Social />
				<FAQs />
			</Box>
			<Footer />
		</Provider>
	);
};

export default App;
