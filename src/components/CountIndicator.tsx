import React from 'react';
import { Box, Txt, Button } from 'rendition';
import styled from 'styled-components';

export interface CountIndicatorProps {
	count: number;
}

const Container = styled(Box)`
	position: absolute;
	bottom: 20px;
	left: calc((100% - 1280px) / 2);
	min-width: 220;
	background: #fff;
	z-index: 100;

	@media all and (max-width: 1280px) {
		left: 20px;
	}
`;

export const CountIndicator = ({ count }: CountIndicatorProps) => (
	<Container px="25px" py="20px">
		<Txt color="primary.main" align="center" bold fontSize={7}>
			{count.toLocaleString()}
		</Txt>
		<Txt maxWidth={200} align="center">
			Computers fighting COVID-19 pandemic around the world
		</Txt>
		<Button href="#get-started" width="100%" mt={2} primary>
			Join the fight!
		</Button>
	</Container>
);
