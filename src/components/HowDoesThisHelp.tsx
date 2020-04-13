import React from 'react';
import { Box, Txt, Heading, Divider } from 'rendition';

export const HowDoesThisHelp = () => (
	<Box maxWidth="1215px" my={3} width="100%" mx="auto" px={3}>
		<Heading.h2 fontSize={5} bold py={3}>
			How does this help
		</Heading.h2>
		<Txt.p fontSize={2}>
			Scientists, Researchers, and Doctors around the globe are currently
			looking for ways to help prevent and treat Corona Virus (Covid-19), using
			many different strategies. The Baker Lab at the University of Washington
			runs a project called Rosetta@Home making use of distributed computing
			platforms, harnessing the combined computing power of volunteers all
			around the world. People who donate their machines to the cause are sent
			complex mathematical simulations to run locally, which are then uploaded
			back to the Lab once the calculations are complete.
		</Txt.p>
		<Txt.p fontSize={2} pt={2}>
			Rosetta@Home has actually existed for many years, helping identify
			compounds and “designing new proteins to fight diseases such as HIV,
			Malaria, Cancer, and Alzheimer's”. At the moment however, researchers
			there are focused on Covid-19, and attempting to predict the structure of
			proteins important to the disease as well as to produce new, stable
			mini-proteins to be used as potential therapeutics and diagnostics. To
			accomplish this, protein simulations are created that are tested to see
			whether they will bind to the “spike” protein found on the Corona Virus.
			Here is an example of one such successful protein identified thus far:
		</Txt.p>
		<Txt.p fontSize={2} pt={2}>
			The 4R Project (Reusing Redundant & Raspberry computers for Rosetta) has
			been created to provide computing capacity to these researchers with your
			old laptop or desktop computer, Raspberry Pi 4, or other compatible single
			board computers. The goal of the 4R Project is to make it simple for users
			to install and configure these devices, and automatically run the Rosetta
			software to begin crunching data.
		</Txt.p>
		<Divider mt={4} />
		<Heading.h2 fontSize={5} bold py={3}>
			Why are we doing this?
		</Heading.h2>
		<Txt.p fontSize={2} pb={3}>
			At balena we love open source initiatives that try to make the world a
			better place. After learning about the great work that the Rosetta team is
			doing, we felt we could help make an impact by allowing folks to easily
			add their spare computers and devices to the platform. Knowing we had the
			engineering expertise to streamline the process, and have fantastic
			community support, we created the project so that scientists and
			researchers can start to identify potential treatments for Covid-19 as
			quickly as possible. So, come join us on the Forums, or submit fixes,
			improvements, or add features to our GitHub repository here: balena
			Rosetta@Home github repository.
		</Txt.p>
	</Box>
);
