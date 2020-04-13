import React from 'react';
import { Flex, Box, Txt, Img } from 'rendition';
import { Indicator } from './Indicator';

export interface InfoStepProps {
	index: number;
	title: string;
	img: any;
}

export const InfoStep = ({ index, title, img }: InfoStepProps) => (
	<Flex my={[3, 3, 0, 0]} flex={1}>
		<Indicator index={index} />
		<Flex
			maxWidth={['100%', '100%', '150px', '150px']}
			flexDirection="column"
			alignItems="start"
		>
			<Txt
				fontSize={[3, 3, '13px', '13px']}
				mb={[3, 3, 2, 2]}
				style={{ lineHeight: 1.31, fontWeight: 600 }}
			>
				{title}
			</Txt>
			<Box height={[100, 100, 52, 52]}>
				<Img src={img} style={{ height: '100%' }} alt="laptop" />
			</Box>
		</Flex>
	</Flex>
);
