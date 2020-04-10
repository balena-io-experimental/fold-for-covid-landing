import React from 'react';
import { Provider, Heading, Txt, Box, Flex, Button } from 'rendition';
import { createGlobalStyle } from 'styled-components';
import { DownloadImage } from './DownloadImage';
import Footer from './Footer';
import Header from './Header';
import FAQs from './FAQs';
import Social from './Social';
import Forum from './Forum';

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

				<Flex
					mt={5}
					mx="auto"
					maxWidth="1280px"
					flexDirection={['column', 'column', 'row']}
					alignItems="center"
					justifyContent="space-between"
					p={5}
				>
					<Box flex={1} mr={[0, 0, 3]}>
						<Heading.h2>How does this help?</Heading.h2>
						<Txt.p>
							Rosetta@Home is the project is led by the{' '}
							<strong>Baker Laboratory at the University of Washington.</strong>{' '}
							The main goal of the Rosetta@Home project is to predict protein
							docking. The current research of Rosetta@Home is on the
							therapeutic side, after patients already have COVID-19. Do you
							have a spare device at home? Would you like to help Baker
							Laboratory to block the spikes on proteins of the COVID-19?{' '}
							<strong>Let’s make it happen.</strong>
						</Txt.p>
						<Button label="Read More" />
					</Box>

					<Box flex={2} ml={[0, 0, 3]} height="400px" bg="lightblue">
						Illustration placeholder
					</Box>
				</Flex>

				<Box mt={5} p={5} bg="quartenary.light" width="100%">
					<Flex
						mx="auto"
						maxWidth="768px"
						flexDirection={'column'}
						alignItems="center"
						justifyContent="center"
					>
						<Heading.h2 align="center">Join the fight</Heading.h2>
						<Txt align="center">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Accusantium minus quos, aperiam impedit in est nisi, totam odio
							consequuntur asperiores temporibus voluptatibus non ab itaque qui
							deserunt iusto debitis blanditiis!
						</Txt>

						<Box my={4} width="600px" height="300px" bg="lightyellow">
							Illustration placeholder
						</Box>
						<Button primary>Get started</Button>
					</Flex>
				</Box>

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
