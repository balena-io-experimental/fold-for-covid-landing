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
import { HowDoesItWork } from './HowDoesItWork';
import { SubHeader } from './SubHeader';
import { Credits } from './Credits';
import BalenaSdk from 'balena-sdk';
import { AboutTheProject } from './HowDoesItHelp';

const GlobalStyle = createGlobalStyle`
	${reset}
  body {
    margin: 0;
		color: #333;
  }
`;

const API_ENDPOINT = 'https://api.balena-cloud.com';

const sdk = BalenaSdk({
	apiUrl: API_ENDPOINT,
	isBrowser: true,
});

const App = () => {
	const [devices, setDevices] = React.useState<undefined | any[]>();
	const [applications, setApplications] = React.useState<
		BalenaSdk.Application[] | undefined
	>();

	React.useEffect(() => {
		document.getElementById('main-spinner')?.remove();
	}, []);

	React.useEffect(() => {
		sdk.pine
			.get<BalenaSdk.Application>({
				resource: 'application',
				options: {
					$select: ['id', 'device_type', 'app_name'],
					$filter: {
						is_public: true,
						slug: {
							$in: [
								'balenalabs/rosetta-at-home-amd64',
								'balenalabs/rosetta-at-home-arm',
							],
						},
					},
				},
			})
			.then(setApplications)
			.catch(console.error);
	}, []);

	React.useEffect(() => {
		if (!applications) {
			return;
		}

		sdk.pine
			.get({
				resource: 'public_device',
				options: {
					// $select: ["latitude", "longitude"],
					$filter: {
						belongs_to__application: { $in: applications.map((app) => app.id) },
					},
				},
			})
			.then(setDevices)
			.catch(console.error);
	}, [applications]);

	return (
		<Router>
			<Provider
				style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
				theme={
					{
						colors: {
							primary: { main: '#63ba97', light: '#eff8f4' },
							text: { main: '#333', light: '#737373' },
							border: { dark: '#63ba97', light: '#eff8f4' },
						},
						fontSizes: [12, 14, 16, 18, 20, 24, 38, 50],
						font: `-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
						titleFont: `-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
						radius: 0,
						button: {
							border: { radius: 0 },
							font: {
								weight: 600,
							},
						},
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
							<DeviceMap devices={devices} />
							<HelpSection />
							<Credits />
							<GetStarted applications={applications} sdk={sdk} />
							<Forum />
							<Social />
							<FAQs />
						</Box>
					</Route>
					<Route exact path="/how-does-it-help">
						<AboutTheProject />
					</Route>
					<Route exact path="/how-does-it-work">
						<HowDoesItWork />
					</Route>
				</Switch>
				<Footer />
			</Provider>
		</Router>
	);
};

export default App;
