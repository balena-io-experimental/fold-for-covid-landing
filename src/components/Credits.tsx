import React from 'react';
import { Flex, Box, Img } from 'rendition';
import rosettaAtHomeLogo from '../img/rosetta-at-home-logo.png';
import armLogo from '../img/arm-logo.png';
import ninetySixBoardsLogo from '../img/96boards-logo.png';
import linaroLogo from '../img/linaro-logo.png';
import neocortixLogo from '../img/neocortix-logo.png';
import packetLogo from '../img/packet-logo.png';
import balenaLogo from '../img/balena-dark.svg';

const Logo = ({
	src,
	alt,
	size,
}: {
	src: string;
	alt: string;
	size?: number;
}) => {
	return (
		<Img src={src} style={{ maxHeight: size ?? 34, margin: 16 }} alt={alt} />
	);
};

export const Credits = () => {
	return (
		<Box px={3} py={5} id="credits" bg="primary.light">
			<Flex
				mx="auto"
				justifyContent="center"
				alignItems="center"
				maxWidth={1280}
				flexDirection="row"
				flexWrap="wrap"
			>
				<Logo src={rosettaAtHomeLogo} alt="Rosetta at home logo" />
				<Logo src={armLogo} alt="Arm logo" />
				<Logo src={packetLogo} alt="Packet logo" />
				<Logo src={neocortixLogo} alt="Neocortix logo" />
				<Logo src={linaroLogo} alt="Linaro logo" />
				<Logo src={ninetySixBoardsLogo} alt="96 boards logo" />
				<Logo src={balenaLogo} alt="Balena logo" />
			</Flex>
		</Box>
	);
};
