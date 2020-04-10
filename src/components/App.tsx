import React from 'react';
import { Provider, Heading, Box, Flex } from 'rendition';
import { createGlobalStyle } from 'styled-components';
import { DownloadImage } from './DownloadImage';
import Footer from './Footer';
import Header from './Header';
import FAQs from './FAQs';
import Social from './Social';
import Forum from './Forum';
import HelpSection from './HelpSection';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`;

const App = () => {
	return (
		<Provider
			theme={
				{
					colors: { primary: { main: '#63ba97' } },
					fontSizes: [12, 14, 16, 18, 20, 26, 38, 48],
					font: `-apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
					radius: 0,
					button: { border: { radius: 0 } },
				} as any
			}
		>
			<Header />
			<GlobalStyle />
			<Box color="text.main">
				<Box width="100%" height="500px" bg="lightblue">
					Map placeholder
				</Box>
				<HelpSection />
				<Flex
					mt={5}
					mx="auto"
					maxWidth="1280px"
					flexDirection={'column'}
					alignItems="center"
					justifyContent="center"
					p={5}
				>
					<Heading.h2 align="center">Select your hardware</Heading.h2>
					<DownloadImage />
				</Flex>
				<Forum />
				<Social />
				<FAQs />
			</Box>
			<Footer />
		</Provider>
	);
};

export default App;
