import React from 'react';
import { Box, Txt, Heading, Flex, Img } from 'rendition';
import proteinImage from '../img/protein-image.png';
import { CTASection } from './CTASection';
import { ExternalLink } from './ExternalLink';

export const AboutTheProject = () => (
	<>
		<Box maxWidth="1280px" my={3} width="100%" mx="auto" px={3} py={2}>
			<Heading.h1 bold py={3}>
				How does it help?
			</Heading.h1>

			<Flex flexDirection={['column', 'column', 'row']}>
				<Box flex={1}>
					<Txt.p mt={3}>
						Contributing the computing capacity of spare devices helps power{' '}
						<ExternalLink
							label="Rosetta@Home"
							href="https://boinc.bakerlab.org"
						/>{' '}
						a project that uses distributed computing to conduct research.
						<ExternalLink
							href="https://www.bakerlab.org"
							label="The Baker Laboratory at the University of Washington"
						/>{' '}
						runs Rosetta@Home to simulate protein folding, in efforts to
						discover potential treatments for COVID-19.
					</Txt.p>

					<Txt.p mt={3}>
						<ExternalLink
							label="Rosetta@Home"
							href="https://boinc.bakerlab.org"
						/>{' '}
						has been operating for many years, helping identify compounds and
						“designing new proteins to fight diseases such as HIV, Malaria,
						Cancer, and Alzheimer's.” At the moment, researchers focus on
						COVID-19, and attempt to predict the structure of proteins important
						to the disease as well as to produce new, stable mini-proteins to be
						used as potential therapeutics and diagnostics.
					</Txt.p>

					<Txt.p mt={3}>
						All the results from Rosetta@Home are public, such as the SARS-CoV-2
						models that you can download.{' '}
						<ExternalLink
							label="here"
							href="https://www.ipd.uw.edu/coronavirus/"
						/>
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
						style={{ maxHeight: 250 }}
						alt="covid19 protein"
					/>
					<Txt fontSize={0} mt={2} maxWidth={400} align="center">
						Protein simulations are created to see whether they will bind to the
						“spike” protein found on the COVID-19. Here is an example of one
						such successful protein identified thus far.
					</Txt>
				</Flex>
			</Flex>
		</Box>
		<CTASection />
	</>
);
