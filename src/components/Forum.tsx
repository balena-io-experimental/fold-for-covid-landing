import React from 'react';
import { Box, Flex, Heading, Txt, Button } from 'rendition';

const Forum = () => {
	return (
		<Box mt={5} p={1} bg="#fff" width="100%">
			<Flex
				mx="auto"
				maxWidth="960px"
				alignItems="center"
				justifyContent="center"
			>
				<Box mr={3}>
					<Heading.h2 bold fontSize="34px">
						Come, and join the forums.
					</Heading.h2>
					<Txt fontSize={1}>
						Running the project already? Have questions? Want to hang out?
					</Txt>
				</Box>
				<Button primary>See forums</Button>
			</Flex>
		</Box>
	);
};

export default Forum;
