import React from 'react';
import { Flex, Box, Img, Link } from 'rendition';
import rosettaAtHomeLogo from '../img/rosetta-home-logo.png';
import rosettaAtHome2xLogo from '../img/rosetta-home-logo@2x.png';
import rosettaAtHome3xLogo from '../img/rosetta-home-logo@3x.png';
// import armLogo from '../img/arm-logo.png';
// import arm2xLogo from '../img/arm-logo@2x.png';
// import arm3xLogo from '../img/arm-logo@3x.png';
import ninetySixBoardsLogo from '../img/96boards-logo.png';
import ninetySixBoards2xLogo from '../img/96boards-logo@2x.png';
import ninetySixBoards3xLogo from '../img/96boards-logo@3x.png';
import linaroLogo from '../img/linaro-logo.png';
import linaro2xLogo from '../img/linaro-logo@2x.png';
import linaro3xLogo from '../img/linaro-logo@3x.png';
import balenaLogo from '../img/balena-logo.png';
import balena2xLogo from '../img/balena-logo@2x.png';
import balena3xLogo from '../img/balena-logo@3x.png';
import neocortixLogo from '../img/neocortix-logo.png';
import neocortix2xLogo from '../img/neocortix-logo@2x.png';
import neocortix3xLogo from '../img/neocortix-logo@3x.png';
import packetLogo from '../img/packet-logo.png';
import packet2xLogo from '../img/packet-logo@2x.png';
import packet3xLogo from '../img/packet-logo@3x.png';
import universityOfWashingtonLogo from '../img/university-of-washington-logo.png';
import universityOfWashington2xLogo from '../img/university-of-washington-logo@2x.png';
import universityOfWashington3xLogo from '../img/university-of-washington-logo@3x.png';

const Logo = ({
	src,
	srcSet,
	alt,
	size,
}: {
	src?: string;
	srcSet?: string;
	alt: string;
	size?: number;
}) => {
	return (
		<Img
			src={src}
			srcSet={srcSet}
			style={{ maxHeight: size ?? 30, margin: 16 }}
			alt={alt}
		/>
	);
};

export const Credits = () => {
	return (
		<Box px={3} py={3} mt={3} id="credits" bg="primary.light">
			<Flex
				mx="auto"
				justifyContent="center"
				alignItems="center"
				maxWidth={1280}
				flexDirection="row"
				flexWrap="wrap"
			>
				<Link href="http://www.washington.edu/" rel="noopener noreferrer" blank>
					<Logo
						src={universityOfWashingtonLogo}
						srcSet={`${universityOfWashingtonLogo}, ${universityOfWashington2xLogo} 2x, ${universityOfWashington3xLogo} 3x`}
						size={30}
						alt="University of Washington logo"
					/>
				</Link>
				<Link
					href="https://boinc.bakerlab.org/"
					rel="noopener noreferrer"
					blank
				>
					<Logo
						src={rosettaAtHomeLogo}
						srcSet={`${rosettaAtHomeLogo}, ${rosettaAtHome2xLogo} 2x, ${rosettaAtHome3xLogo} 3x`}
						size={30}
						alt="Rosetta at home logo"
					/>
				</Link>
				{/* <Link href="https://www.arm.com/" rel="noopener noreferrer" blank>
					<Logo
						src={armLogo}
						srcSet={`${armLogo}, ${arm2xLogo} 2x, ${arm3xLogo} 3x`}
						alt="Arm logo"
					/>
				</Link> */}
				<Link href="https://www.packet.com/" rel="noopener noreferrer" blank>
					<Logo
						src={packetLogo}
						srcSet={`${packetLogo}, ${packet2xLogo} 2x, ${packet3xLogo} 3x`}
						alt="Packet logo"
					/>
				</Link>
				<Link href="https://www.neocortix.com/" rel="noopener noreferrer" blank>
					<Logo
						src={neocortixLogo}
						srcSet={`${neocortixLogo}, ${neocortix2xLogo} 2x, ${neocortix3xLogo} 3x`}
						alt="Neocortix logo"
					/>
				</Link>
				<Link href="https://www.linaro.org/" rel="noopener noreferrer" blank>
					<Logo
						src={linaroLogo}
						srcSet={`${linaroLogo}, ${linaro2xLogo} 2x, ${linaro3xLogo} 3x`}
						alt="Linaro logo"
					/>
				</Link>
				<Link href="https://www.96boards.org/" rel="noopener noreferrer" blank>
					<Logo
						src={ninetySixBoardsLogo}
						srcSet={`${ninetySixBoardsLogo}, ${ninetySixBoards2xLogo} 2x, ${ninetySixBoards3xLogo} 3x`}
						alt="96 boards logo"
					/>
				</Link>
				<Link href="https://www.balena.io/" rel="noopener noreferrer" blank>
					<Logo
						src={balenaLogo}
						srcSet={`${balenaLogo}, ${balena2xLogo} 2x, ${balena3xLogo} 3x`}
						alt="Balena logo"
					/>
				</Link>
			</Flex>
		</Box>
	);
};
