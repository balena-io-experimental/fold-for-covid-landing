import React from 'react';
import { Box, Flex, Heading, Txt, Button } from 'rendition';

const Forum = () => {
	return (
		<Box id="community" mt={[4, 4, 5, 5]} p={1} bg="#fff" width="100%">
			<Flex
				mx="auto"
				maxWidth="960px"
				px={[3, 3, 0, 0]}
				flexDirection={['column', 'column', 'row', 'row']}
				alignItems="center"
				justifyContent="center"
			>
				<Box mr={[0, 0, 3, 3]} mb={[3, 3, 0, 0]}>
					<Heading.h2 bold fontSize="34px">
						Come, and join the forums.
					</Heading.h2>
					<Txt fontSize={1}>
						Running the project already? Have questions? Want to hang out?
					</Txt>
				</Box>
				<Button primary target="_blank" href="https://forums.balena.io">
					See forums
				</Button>
			</Flex>
		</Box>
	);
};

export default Forum;
