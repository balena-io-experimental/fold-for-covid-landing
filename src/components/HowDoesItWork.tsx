import React from 'react';
import { Box, Txt, Heading, Flex, Img } from 'rendition';
import { CTASection } from './CTASection';
import { ExternalLink } from './ExternalLink';
import howItWorksIllustration from '../img/how-it-works.svg';
import { useTrackPageview } from './useTracker';

export const HowDoesItWork = () => {
	useTrackPageview();

	return (
		<>
			<Box maxWidth="1280px" my={3} width="100%" mx="auto" px={3} py={2}>
				<Heading.h1 bold py={3}>
					How does it work?
				</Heading.h1>
				<Flex flexDirection={['column', 'column', 'row']}>
					<Box flex={1}>
						<Txt.p>
							Fold for Covid was created to help increase awareness of the
							Rosetta@home project, and to simplify the process of getting
							involved. We at balena wanted to use our expertise in deploying
							and maintaining huge fleets of connected devices in some way to
							help with the current global health situation. We applied what we
							do best: making it as easy as possible for people to get projects
							up and running.
						</Txt.p>
						<Txt.p pt={3}>
							We noticed what the team over at Rosetta@home is doing and used
							our efforts to boost the computing power available to them by
							simplifying the process required to get devices online to help
							conduct{' '}
							<ExternalLink href="/how-does-it-help" label="protein folding" />{' '}
							simulations.
						</Txt.p>
						<Heading.h3 bold py={3}>
							Setting up a new computer
						</Heading.h3>
						<Txt.p>
							Usually, when you set up a computer, you have to install an
							operating system (OS) first, before you can install any other
							software. That might be Raspbian in the case of a Raspberry Pi, or
							Windows/Linux in the case of a Laptop. After you’ve installed the
							OS, you can start to install and set up the software you want.
						</Txt.p>
						<Txt.p pt={3}>
							<Txt.span italic>We’ve cut all of that out.</Txt.span> We built
							our own OS image, compatible with a whole range of computers;
							laptops, desktops and small devices like the Raspberry Pi. Next,
							we preloaded the OS image with the software required to contribute
							to the Rosetta project, and configured it with the settings
							necessary to get to work immediately.
						</Txt.p>
						<Txt.p pt={3}>
							You simply need to download the image and flash it to your device.
							Boot it up and it appears online and ready to start work. That’s
							it.
						</Txt.p>

						<Heading.h3 bold py={3}>
							Getting online
						</Heading.h3>
						<Txt.p>
							When you download the OS image from the{' '}
							<ExternalLink
								label="getting started guide"
								href="/#get-started"
							/>{' '}
							getting started guide, we’ve set the system up to automatically
							configure the Wi-Fi connection with the network name and
							passphrase that you specify. <Txt.span bold>Note: </Txt.span>These
							credentials are injected into the image and then disposed of.
						</Txt.p>

						<Heading.h3 bold py={3}>
							Running the software
						</Heading.h3>
						<Txt.p>
							Once the OS has been installed, it automatically boots up and gets
							to work. The device joins the global fleet of balena-powered
							devices, meaning that if there are any updates to the project (via{' '}
							<ExternalLink
								label="the Github repository"
								href="https://github.com/balenalabs/rosetta-at-home/"
							/>{' '}
							), they are downloaded and fully applied automatically. The idea:
							to get your device running, and to keep it running, without any
							extra involvement.
						</Txt.p>
						<Txt.p pt={3}>
							We included some additional features like a web interface you can
							use to see status at{' '}
							<ExternalLink
								label="http://foldforcovid.local"
								href="http://foldforcovid.local"
							/>
							, and your device will also output the same information to a
							connected display if you have one.
						</Txt.p>
						<Heading.h3 bold py={3}>
							Behind the scenes
						</Heading.h3>
						<Txt.p>
							We’re running{' '}
							<ExternalLink label="balenaOS" href="https://balena.io/os" />, and
							the application has been set up to run in containers on{' '}
							<ExternalLink
								label="balenaCloud"
								href="https://balena.io/cloud"
							/>
							, which takes care of device updates. Your device is automatically
							added to a group of devices, called a fleet, that runs the
							application from the{' '}
							<ExternalLink
								label="“Fold for Covid” Github repository"
								href="https://github.com/balenalabs/rosetta-at-home"
							/>
							.
						</Txt.p>
						<Txt.p pt={3}>
							If you’re interested in learning more about this process, head on
							over to{' '}
							<ExternalLink
								label="the balena site"
								href="https://www.balena.io/what-is-balena/"
							/>{' '}
							to find out more.
						</Txt.p>
					</Box>
					<Flex mx={3} flex={1} flexDirection="column" alignItems="center">
						<Img src={howItWorksIllustration} alt="How it works illustration" />
					</Flex>
				</Flex>
			</Box>
			<CTASection />
		</>
	);
};
