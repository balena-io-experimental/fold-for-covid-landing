import React from 'react';
import { Box, Txt, Heading, Flex, Img } from 'rendition';
import proteinImage from '../img/protein-image.png';

export const HowDoesThisHelp = () => (
	<Box maxWidth="1280px" my={4} width="100%" mx="auto" px={3} py={2}>
		<Flex flexDirection={['column', 'column', 'row']}>
			<Box flex={1}>
				<Heading.h1 bold py={3}>
					About the project
				</Heading.h1>
				<Txt.p bold>
					The balena team has containerized the Rosetta@home project into one
					simple installation for any 64-bit Intel or ARM64 device. This could
					be a spare PC, old laptop, Raspberry Pi 4, or other compatible
					computers. Our goal is to make it simple for users to install and
					configure these devices, and automatically run the Rosetta software to
					begin crunching data.
				</Txt.p>

				<Heading.h2 mt={4}>How does this help?</Heading.h2>
				<Txt.p>
					Scientists, rResearchers, and dDoctors around the globe are currently
					looking for ways to help prevent and treat COVID-19, using many
					different strategies. The Baker Lab at the University of Washington
					runs a project called Rosetta@Home, making use of distributed
					computing platforms to, harnessing the combined computing power of
					volunteers all around the world. People who donate their machines to
					the cause are sent complex mathematical simulations to run locally,
					which are then uploaded back to the Lab once the calculations are
					complete.
				</Txt.p>

				<Txt.p pt={2}>
					Rosetta@Home has actually existed for many years, helping identify
					compounds and “designing new proteins to fight diseases such as HIV,
					Malaria, Cancer, and Alzheimer's”. At the moment however, researchers
					focusthere are focused on COVIDovid-19, and attemptattempting to
					predict the structure of proteins important to the disease as well as
					to produce new, stable mini-proteins to be used as potential
					therapeutics and diagnostics.
				</Txt.p>

				<Txt.p pt={2}>
					To accomplish this, protein simulations are created that are tested to
					see whether they will bind to the “spike” protein found on the
					COVID-19Corona Virus. Here is an image of one such successful protein
					identified thus far.
				</Txt.p>
			</Box>
			<Flex
				mt={3}
				mx={3}
				flex={1}
				flexDirection="column"
				alignItems="center"
				justifyContent="flex-end"
			>
				<Img
					src={proteinImage}
					style={{ maxHeight: 400 }}
					alt="covid19 protein"
				/>
				<Txt fontSize={0}>
					Example of one such successful protein identified
				</Txt>
			</Flex>
		</Flex>
	</Box>
);
