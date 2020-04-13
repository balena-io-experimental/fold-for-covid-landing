import React from 'react';
import { Flex, Heading, Box, Tabs, Tab, Txt, Button } from 'rendition';
import { DownloadImage } from './DownloadImage';
import { Indicator } from './Indicator';
import { ExternalLink } from './ExternalLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowToBottom } from '@fortawesome/pro-regular-svg-icons';

interface StepProps {
	index: number;
	children: React.ReactNode;
}

const Step = ({ index, children }: StepProps) => (
	<Flex mt={4}>
		<Indicator index={index} />
		<Flex
			ml={2}
			flexDirection="column"
			alignItems="flex-start"
			justifyContent="left"
		>
			{children}
		</Flex>
	</Flex>
);

const GetStarted = () => {
	return (
		<Box bg="primary.light">
			<Flex mt={4} mx="auto" maxWidth="1280px" flexDirection={'column'} p={3}>
				<Heading.h2 fontSize={5} color="text.main" bold>
					Get Started
				</Heading.h2>
				<Box maxWidth="100%" width="600px">
					<Tabs>
						<Tab
							title={
								<Txt fontSize={2} bold>
									Boards
								</Txt>
							}
						>
							<Txt.p fontSize={2}>
								Getting started on a <Txt.span bold>Raspberry Pi 4</Txt.span> is
								simple! Follow these steps to download our ready-made operating
								system, flash it to an SD Card, and begin crunching data to help
								scientists!
							</Txt.p>
							<Txt.p fontSize={2}>
								<Txt.span bold>
									Please Note: This project requires a Raspberry Pi 4 with 2GB
									or 4GB of memory
								</Txt.span>
								. These simulations are large and the 1GB version of the
								Raspberry Pi 4 doesn’t have enough memory to run the work units
								Rosetta@Home provides.
							</Txt.p>
						</Tab>
						<Tab
							title={
								<Txt fontSize={2} bold>
									Laptops or Desktop Computers
								</Txt>
							}
						>
							<Txt.p fontSize={2}>
								Getting started on an unused laptop or desktop PC is easy!
								Follow these steps to download our ready-made operating system,
								flash it to a USB stick, and begin crunching data to help
								scientists!
							</Txt.p>

							<Txt.p fontSize={2}>
								<Txt.span bold>WARNING:</Txt.span> This project is intended to
								be used on a spare, unused computer. It will overwrite your
								existing hard drive contents, causing loss of ALL data on the
								computer. Only run this on a device that you don’t plan on
								using.
							</Txt.p>
						</Tab>
					</Tabs>
					<Heading.h3 bold my={3} fontSize={3}>
						Let's begin
					</Heading.h3>
					<Step index={1}>
						<Txt fontSize={2} bold>
							Download and Install{' '}
							<ExternalLink
								href="https://balena.io/etcher"
								label="balenaEtcher"
							/>
						</Txt>
						<Button
							mt={3}
							primary
							icon={<FontAwesomeIcon icon={faArrowToBottom} />}
						>
							Download Now
						</Button>
					</Step>
					<Step index={2}>
						<Txt fontSize={2} bold>
							Download the ready-made Operating System below.
						</Txt>
						<DownloadImage />
					</Step>
					<Step index={3}>
						<Txt fontSize={2} bold>
							Launch balenaEtcher
						</Txt>
						<Txt fontSize={2} my={3}>
							choose the file you just downloaded, select your SD card and click
							"Flash".
						</Txt>
						<Flex
							alignItems="center"
							justifyContent="center"
							width="500px"
							height="300px"
							bg="lightblue"
						>
							Etcher Gif Place holder
						</Flex>
					</Step>
					<Step index={4}>
						<Txt fontSize={2}>
							Once complete,{' '}
							<Txt.span bold>
								place the SD Card in your Raspberry Pi / Jetson Nano, and power
								it on
							</Txt.span>
							. Your device will automatically join the Fleet, and begin
							crunching data!{' '}
							<span aria-label="Partying Face Emoji" role="img">
								🥳
							</span>
						</Txt>
						<Flex
							alignItems="center"
							justifyContent="center"
							width="500px"
							height="300px"
							bg="lightblue"
						>
							Gif Place holder
						</Flex>
					</Step>
					<Step index={5}>
						<Txt fontSize={2}>
							<Txt.span bold>
								To view your device’s current activity, visit your Pi’s new
								hostname, 4Rproject.local, in a web browser like this:
							</Txt.span>
							<ExternalLink
								href="http://4rproject.local"
								label="4rproject.local"
							/>
							.
						</Txt>
						<Flex
							alignItems="center"
							justifyContent="center"
							width="500px"
							height="300px"
							bg="lightblue"
						>
							Screenshot Place holder
						</Flex>
					</Step>
				</Box>
			</Flex>
		</Box>
	);
};

export default GetStarted;
