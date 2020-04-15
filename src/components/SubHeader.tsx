import * as React from 'react';
import { Box, Heading } from 'rendition';

export const SubHeader = () => {
	return (
		<Box width="100%" bg="#333333">
			<Box mx="auto" pb={3} px={3} width="100%" maxWidth="1280px">
				<Heading.h1
					color="#fff"
					fontSize={[5, 6, 6, 7]}
					style={{ lineHeight: 1.28 }}
					bold
				>
					Help fight the COVID-19 pandemic with your old laptop, Raspberry Pi,
					or other spare computer
				</Heading.h1>
			</Box>
		</Box>
	);
};
