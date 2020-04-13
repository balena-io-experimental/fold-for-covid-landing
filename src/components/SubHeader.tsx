import * as React from 'react';
import { Box, Heading } from 'rendition';

export const SubHeader = () => {
	return (
		<Box width="100%" bg="#333333">
			<Box mx="auto" pb={3} px={3} width="100%" maxWidth="1215px">
				<Heading.h1
					style={{ lineHeight: '1.28' }}
					color="#fff"
					fontSize={[5, 6, 7, 7]}
					bold
				>
					Help fight the COVID-19 pandemic with your old laptop, Raspberry Pi,
					or other spare computer
				</Heading.h1>
			</Box>
		</Box>
	);
};
