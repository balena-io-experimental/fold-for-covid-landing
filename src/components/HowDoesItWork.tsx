import React from 'react';
import { Box, Txt, Heading, Flex } from 'rendition';
import { CTASection } from './CTASection';
import { ExternalLink } from './ExternalLink';

export const HowDoesItWork = () => (
	<>
		<Box maxWidth="1280px" my={4} width="100%" mx="auto" px={3} py={2}>
			<Flex flexDirection={['column', 'column', 'row']}>
				<Box flex={1}>
					<Heading.h1 bold py={3}>
						How does it work?
					</Heading.h1>
					<Txt.p>
						The balena team has containerized the Rosetta@home project on a
						minimal Ubuntu operating system., This project installs BOINC (or
						Berkeley Open Infrastructure for Network Computing, the client
						application that manages and distributes work units from the
						Rosetta@Home project), and automatically attaches the device to the
						Rosetta project.
					</Txt.p>

					<Txt.p pt={3}>
						The image downloaded from this website is based on{' '}
						<ExternalLink label="balenaOS" href="https://www.balena.io/os/" />{' '}
						and{' '}
						<ExternalLink
							label="balenaCloud"
							href="https://www.balena.io/cloud/"
						/>{' '}
						technology, pre-loaded with the container running the BOINC
						application attached to Rosetta. The balena technology allows you to
						deploy it to an entire fleet of devices with a shared image
						downloaded from the website. Once your devices are running the
						image, your device will automatically join the balena team on
						Rosetta@Home project, and all of our statistics are combined and the
						total computing power can be viewed on the{' '}
						<ExternalLink
							label="Rosetta@Home balena website"
							href="https://boinc.bakerlab.org/rosetta/show_user.php?userid=2085224"
						/>
						.
					</Txt.p>

					<Txt.p pt={3} pb={2}>
						The container also comes pre-installed with a small terminal program
						called ‘boinctui’ that displays the overall statistics of the
						device. If you place the device’s hostname, which defaults to
						‘foldforcovid.local’, in a web browser you will see it’s output. So,
						on another computer, simply go to{' '}
						<ExternalLink
							href="http://foldforcovid.local"
							label="http://foldforcovid.local"
						/>{' '}
						and you will see your device’s activity.
					</Txt.p>

					<Heading.h3 bold py={3}>
						Why are we doing this?
					</Heading.h3>

					<Txt.p>
						At balena, we love open source initiatives that try to make the
						world a better place. After learning about the Rosetta team’s great
						work , we felt we could help make an impact by allowing folks to
						easily add their spare computers and devices to the platform.
						Lending our engineering expertise to streamline the process,
						including fantastic community support, we created the project so
						that scientists and researchers can start to identify potential
						treatments for COVID-19 as quickly as possible.
					</Txt.p>
					<Txt.p pt={3}>
						So, come join us on the Forums, or submit fixes, improvements, or
						add features to our GitHub repository here:{' '}
						<ExternalLink
							label="balena Rosetta@Home github repository"
							href="https://github.com/balenalabs/rosetta-at-home/"
						/>
						.
					</Txt.p>
				</Box>
				<Flex
					mt={3}
					mx={3}
					flex={1}
					flexDirection="column"
					alignItems="center"
					justifyContent="flex-end"
				></Flex>
			</Flex>
		</Box>
		<CTASection />
	</>
);
