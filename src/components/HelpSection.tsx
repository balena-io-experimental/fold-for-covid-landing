import React from 'react';
import { Flex, Box, Heading, Txt, Button } from 'rendition';
import join_1 from '../img/join_1.svg';
import join_2 from '../img/join_2.svg';
import join_3 from '../img/join_3.svg';
import { ExternalLink } from './ExternalLink';
import { InfoStep } from './InfoStep';
import { useHistory } from 'react-router-dom';

const HelpSection = () => {
	const history = useHistory();
	return (
		<Flex
			mt={5}
			mx="auto"
			maxWidth="1280px"
			flexDirection={['column', 'column', 'row', 'row']}
			alignItems="center"
			justifyContent="space-between"
			px={3}
			id="how-does-this-help"
		>
			<Box flex={1} mr={[0, 0, 3]}>
				<Heading.h2 bold fontSize={4}>
					What is 4R, and how does it help?
				</Heading.h2>
				<Txt.p fontSize={2}>
					The 4R Project (Reusing Redundant & Raspberry computer for Rosetta)
					makes it easy to donate spare compute capacity to support Covid-19
					research. This effort contributes to the{' '}
					<ExternalLink
						label="Rosetta@Home"
						href="https://boinc.bakerlab.org"
					/>{' '}
					project, led by the{' '}
					<ExternalLink
						href="https://www.bakerlab.org"
						label="Baker Laboratory at the University of Washington"
					/>
					, which uses distributed computing to help scientists and doctors find
					potential treatments for Covid-19.
				</Txt.p>
				<Txt.p fontSize={2}>
					Your contributions help researchers look for proteins that bind to the
					famous "spike" protein on Covid-19. By finding these binding proteins,
					doctors hope to develop medicines that prevent the virus from entering
					healthy cells.
				</Txt.p>
				<Txt.p fontSize={2}>
					Do you have a spare computer or single board computer at home? Help
					the fight!
				</Txt.p>
				<Button
					onClick={() => history.push('/how-does-this-help')}
					outline
					my={[2, 2, 1, 1]}
				>
					Read More
				</Button>
			</Box>

			<Box flex={1} mt={[3, 3, 0, 0]} ml={[0, 0, 3, 3]}>
				<Heading.h2 bold fontSize={3}>
					Join the fight!
				</Heading.h2>
				<Flex
					width="100%"
					justifyContent={['center']}
					flexDirection={['column', 'column', 'row', 'row']}
					my={3}
				>
					<InfoStep
						index={1}
						title="Find an old laptop or computer"
						img={join_1}
					></InfoStep>
					<InfoStep
						index={2}
						title="Download and install  balenaEtcher &amp; image"
						img={join_2}
					></InfoStep>
					<InfoStep
						index={3}
						title="Let’s fight the virus together!"
						img={join_3}
					></InfoStep>
				</Flex>
				<Button mt={2} mb={[2, 2, 1]} primary>
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
