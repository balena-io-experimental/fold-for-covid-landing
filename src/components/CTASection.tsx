import React from 'react';
import CovidComputer from '../img/covid-computer.svg';
import { Box, Flex, Txt, Heading, Button } from 'rendition';

export const CTASection = () => {
	return (
		<Box my={4} bg="primary.light" width="100%">
			<Flex alignItems="flex-end" py={5} maxWidth="1280px" mx="auto">
				<img
					aria-hidden="true"
					src={CovidComputer}
					alt="covid-computer"
					role="presentation"
					style={{ height: 80, marginLeft: 20 }}
				/>
				<Flex mx={5} flexDirection="column" maxWidth={375}>
					<Txt color="primary.main" bold fontSize={0}>
						Join the COVID-19 fight
					</Txt>
					<Heading.h3 bold fontSize={4}>
						Do you have a spare computer <br /> or single board computer at
						home?
					</Heading.h3>
				</Flex>
				<Button primary href="/#get-started">
					Get Started
				</Button>
			</Flex>
		</Box>
	);
};
