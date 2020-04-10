import React from 'react';
import { Flex, Box, Heading, Txt, Button } from 'rendition';
import join_1 from '../img/join_1.svg';
import join_2 from '../img/join_2.svg';
import join_3 from '../img/join_3.svg';

interface StepProps {
	index: number;
	title: string;
	img: any;
}

const Step = ({ index, title, img }: StepProps) => (
	<Flex flex={1}>
		<Flex
			alignItems="center"
			justifyContent="center"
			bg="primary.main"
			color="#fff"
			style={{ borderRadius: '50%' }}
			height={32}
			width={32}
			mr={2}
		>
			{index}
		</Flex>
		<Flex maxWidth="150px" flexDirection="column" alignItems="start">
			<Txt fontSize="13px" mb={2} style={{ lineHeight: 1.31, fontWeight: 600 }}>
				{title}
			</Txt>
			<img src={img} style={{ height: 52 }} alt="laptop" />
		</Flex>
	</Flex>
);

const HelpSection = () => {
	return (
		<Flex
			mt={5}
			mx="auto"
			maxWidth="1280px"
			flexDirection={['column', 'column', 'row']}
			alignItems="center"
			justifyContent="space-between"
			id="how-does-this-help"
		>
			<Box flex={1} mr={[0, 0, 3]}>
				<Heading.h2 bold fontSize={4}>
					What is 4R, and how does it help?
				</Heading.h2>
				<Txt.p fontSize={2}>
					Rosetta@Home is the project is led by the{' '}
					<strong>Baker Laboratory at the University of Washington.</strong> The
					main goal of the Rosetta@Home project is to predict protein docking.
					The current research of Rosetta@Home is on the therapeutic side, after
					patients already have COVID-19. Do you have a spare device at home?
					Would you like to help Baker Laboratory to block the spikes on
					proteins of the COVID-19? <strong>Let’s make it happen.</strong>
				</Txt.p>
				<Button outline>Read More</Button>
			</Box>

			<Box flex={1} ml={[0, 0, 3]}>
				<Heading.h2 bold fontSize={3}>
					Join the fight!
				</Heading.h2>
				<Flex width="100%" my={3}>
					<Step
						index={1}
						title="Find an old laptop or computer"
						img={join_1}
					></Step>
					<Step
						index={2}
						title="Download and install  balenaEtcher &amp; image"
						img={join_2}
					></Step>
					<Step
						index={3}
						title="Let’s fight the virus together!"
						img={join_3}
					></Step>
				</Flex>
				<Button mt={2} mb={1} primary>
					Get Started
				</Button>
				<Txt>
					If you don’t have anything to run this project on you can still help
					by running Rosetta@home on your desktop computer, instructions are
					here.
				</Txt>
			</Box>
		</Flex>
	);
};

export default HelpSection;
