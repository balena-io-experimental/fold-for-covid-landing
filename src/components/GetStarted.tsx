import React from 'react';
import { Flex, Heading, Box } from 'rendition';
import { DownloadImage } from './DownloadImage';

const GetStarted = () => {
	return (
		<Box bg="primary.light">
			<Flex mt={4} mx="auto" maxWidth="1280px" flexDirection={'column'} p={5}>
				<Heading.h2 fontSize={5} color="text.main" bold>
					Get Started
				</Heading.h2>
				<DownloadImage />
			</Flex>
		</Box>
	);
};

export default GetStarted;
