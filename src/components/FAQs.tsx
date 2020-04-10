import * as React from 'react';
import { Flex, Heading, Box } from 'rendition';

const FAQs = () => {
	return (
		<Flex id="faqs" mt={5} maxWidth="960px" flexDirection={'column'} p={5}>
			<Heading.h2>Frequently asked questions</Heading.h2>
			<Box mt={3} height="600px" width="800px" bg="lightblue">
				Accordion placeholder
			</Box>
		</Flex>
	);
};

export default FAQs;
