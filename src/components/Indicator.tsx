import React from 'react';
import { Flex } from 'rendition';

export interface IndicatorProps {
	index: number;
}

export const Indicator = ({ index }: IndicatorProps) => {
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			bg="primary.main"
			color="#fff"
			style={{ borderRadius: '50%' }}
			height={32}
			minWidth={32}
			mr={[3, 3, 2, 2]}
		>
			{index}
		</Flex>
	);
};
