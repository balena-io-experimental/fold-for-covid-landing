import React from 'react';
import { Box, Txt, Button, Spinner } from 'rendition';
import styled from 'styled-components';

export interface CountIndicatorProps {
	count: number | undefined;
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
	<Container px={4} py={3}>
		{count != null && (
			<Txt color="primary.main" align="center" bold fontSize={7}>
				{count.toLocaleString()}
			</Txt>
		)}
		{count == null && <Spinner show={true} width={'100%'} my={3} />}
		<Txt maxWidth={200} align="center">
			Computers fighting COVID-19 around the world
		</Txt>
		<Button href="#get-started" width="100%" mt={2} primary>
			Join the fight!
		</Button>
	</Container>
);
