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
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { HowDoesThisHelp } from './HowDoesThisHelp';
import { SubHeader } from './SubHeader';
import { Credits } from './Credits';

const GlobalStyle = createGlobalStyle`
	${reset}
  body {
    margin: 0;
		color: #333;
  }
`;

const App = () => {
	return (
		<Router>
			<Provider
				theme={
					{
						colors: {
							primary: { main: '#63ba97', light: '#eff8f4' },
							text: { main: '#333', light: '#737373' },
							border: { dark: '#63ba97', light: '#eff8f4' },
						},
						fontSizes: [12, 14, 16, 18, 20, 24, 38, 48],
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
						global: {
							control: {
								border: {
									color: '#333',
								},
							},
						},
					} as any
				}
			>
				<Header />
				<GlobalStyle />
				<Switch>
					<Route path="/" exact>
						<Box color="text.main">
							<SubHeader />
							<DeviceMap />
							<HelpSection />
							<GetStarted />
							<Forum />
							<Credits />
							<Social />
							<FAQs />
						</Box>
					</Route>
					<Route path="/how-does-this-help">
						<HowDoesThisHelp />
					</Route>
				</Switch>
				<Footer />
			</Provider>
		</Router>
	);
};

export default App;
