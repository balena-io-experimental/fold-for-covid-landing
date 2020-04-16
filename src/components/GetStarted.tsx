import React from 'react';
import {
	Flex,
	Heading,
	Box,
	Tabs,
	Tab,
	Txt,
	Select,
	Button,
	Alert,
} from 'rendition';
import { DownloadImage } from './DownloadImage';
import { Indicator } from './Indicator';
import { ExternalLink } from './ExternalLink';
import BalenaSdk from 'balena-sdk';
import insertCard from '../img/insert-sd.gif';
import flashCard from '../img/etcher.gif';
import tasksImg from '../img/tasks.png';
import boincStep1 from '../img/boinc-step-1.png';
import boincStep2 from '../img/boinc-step-2.png';
import { DownloadEtcher } from './DownloadEtcher';
import { LazyImage } from './LazyImage';
import styled from 'styled-components';

const Ul = styled.ul`
	list-style: disc;
	margin-left: 20px;
`;
const deviceTypeWeights: { [slug: string]: number } = {
	'raspberrypi4-64': 100,
	'raspberrypi3-64': 90,
};

const getDeviceTypeImportanceWeight = (deviceTypeSlug: string) => {
	if (deviceTypeWeights[deviceTypeSlug]) {
		return deviceTypeWeights[deviceTypeSlug];
	}

	return 0;
};

const handleError = (err: Error) => {
	// TODO: Show notification instead.
	console.error(err);
};

const getAppArch = (
	app: BalenaSdk.Application,
	deviceTypes: BalenaSdk.DeviceType[],
) => {
	return deviceTypes.find((deviceType) => deviceType.slug === app.device_type)
		?.arch;
};

const getCompatibleDeviceTypes = (
	app: BalenaSdk.Application,
	deviceTypes: BalenaSdk.DeviceType[],
	sdk: BalenaSdk.BalenaSDK,
) => {
	const targetArch = getAppArch(app, deviceTypes);

	if (!targetArch) {
		throw new Error('Failed to find the device type');
	}

	return deviceTypes.filter((deviceType) =>
		sdk.models.os.isArchitectureCompatibleWith(deviceType.arch, targetArch),
	);
};

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

const GetStarted = ({
	applications,
	sdk,
}: {
	sdk: BalenaSdk.BalenaSDK;
	applications: BalenaSdk.Application[] | undefined;
}) => {
	const [selectedAppArch, setSelectedAppArch] = React.useState('aarch64');
	const [isMainComputer, setIsMainComputer] = React.useState(false);

	const [selectedApp, setSelectedApp] = React.useState<
		BalenaSdk.Application | undefined
	>();
	const [selectedDeviceType, setSelectedDeviceType] = React.useState<
		BalenaSdk.DeviceType | undefined
	>();
	const [compatibleDeviceTypes, setCompatibleDeviceTypes] = React.useState<
		BalenaSdk.DeviceType[] | undefined
	>();
	const [deviceTypes, setDeviceTypes] = React.useState<
		BalenaSdk.DeviceType[] | undefined
	>();

	React.useEffect(() => {
		sdk.models.config
			.getDeviceTypes()
			.then((res) =>
				res
					.filter((deviceType) => deviceType.state !== 'DISCONTINUED')
					.sort((a, b) => a.name.localeCompare(b.name))
					.sort(
						(a, b) =>
							getDeviceTypeImportanceWeight(b.slug) -
							getDeviceTypeImportanceWeight(a.slug),
					),
			)
			.then(setDeviceTypes)
			.catch(handleError);
	}, [sdk.models.config]);

	React.useEffect(() => {
		if (!deviceTypes || !applications || !selectedAppArch) {
			return;
		}

		const compatibleApp = applications.find((app) =>
			sdk.models.os.isArchitectureCompatibleWith(
				getAppArch(app, deviceTypes) ?? '',
				selectedAppArch,
			),
		);

		if (!compatibleApp) {
			handleError(
				new Error('Could not find an application with a suitable architecture'),
			);
			return;
		}

		setSelectedApp(compatibleApp);
		setCompatibleDeviceTypes(
			getCompatibleDeviceTypes(compatibleApp, deviceTypes, sdk),
		);
	}, [deviceTypes, applications, selectedAppArch, sdk.models.os, sdk]);

	React.useEffect(() => {
		if (
			selectedDeviceType &&
			compatibleDeviceTypes?.some(
				(deviceType) => deviceType.slug === selectedDeviceType.slug,
			)
		) {
			return;
		}

		setSelectedDeviceType(compatibleDeviceTypes?.[0]);
	}, [compatibleDeviceTypes, selectedDeviceType, selectedApp]);

	const deviceTypeSelector = compatibleDeviceTypes ? (
		<Select<BalenaSdk.DeviceType>
			mt={3}
			mb={3}
			mr={3}
			maxWidth={300}
			options={compatibleDeviceTypes}
			valueKey="slug"
			labelKey="name"
			value={selectedDeviceType || {}}
			onChange={({ option }) => {
				setSelectedDeviceType(option);
			}}
		/>
	) : null;

	return (
		<Box id="get-started" pb={4} bg="primary.light">
			<Flex mt={2} mx="auto" maxWidth="1280px" flexDirection={'column'} p={3}>
				<Heading.h2 pt={4} bold>
					Get Started
				</Heading.h2>

				<Box mt={3} maxWidth="100%" width="600px">
					<Tabs
						onActive={(activeIndex) => {
							setSelectedAppArch(activeIndex === 0 ? 'aarch64' : 'amd64');
							setIsMainComputer(activeIndex === 2);
						}}
					>
						<Tab
							title={
								<Txt fontSize={2} bold>
									Boards
								</Txt>
							}
						>
							{deviceTypeSelector}

							<Txt.p>
								Getting started on a{' '}
								<Txt.span bold>{selectedDeviceType?.name}</Txt.span> is simple!
								Follow these steps to download our ready-made operating system,
								flash it to an SD Card, and begin crunching data to help
								scientists!
							</Txt.p>
							{selectedDeviceType?.name?.includes('raspberry') && (
								<Txt.p>
									<Txt.span bold>
										Please Note: This project requires a{' '}
										{selectedDeviceType?.name} with 2GB or 4GB of memory
									</Txt.span>
									. These simulations are large and the 1GB version of the
									{selectedDeviceType?.name} doesn’t have enough memory to run
									the work units Rosetta@Home provides.
								</Txt.p>
							)}
						</Tab>
						<Tab
							title={
								<Txt fontSize={2} bold>
									Laptops or Desktop Computers
								</Txt>
							}
						>
							{deviceTypeSelector}

							<Txt.p>
								Getting started on an unused laptop or desktop PC is easy!
								Follow these steps to download our ready-made operating system,
								flash it to a USB stick, and begin crunching data to help
								scientists!
							</Txt.p>

							<Txt.p mt={3}>
								<Alert emphasized danger>
									This project is intended to be used on a spare, unused
									computer. It will overwrite your existing hard drive contents,
									causing loss of ALL data on the computer. Only run this on a
									device that you don’t plan on using.
								</Alert>
							</Txt.p>
						</Tab>
						<Tab
							title={
								<Txt fontSize={2} bold>
									Main Computer
								</Txt>
							}
						>
							<Txt.p mt={3}>
								If you don’t have a spare device, you can still get involved by
								donating your main computer’s unused computing power.
							</Txt.p>

							<Txt.p mt={3}>
								Getting started on your main computer is simple! Follow these
								steps to download and install BOINC, add the Rosetta@home
								project and join team balena! (If you’re an existing BOINC user
								you can skip straight to step 3)
							</Txt.p>
							<Txt.p mt={3}>
								<Txt.span bold>Note</Txt.span> - Before you start, we recommend
								ensuring your computer is compatible by checking the{' '}
								<ExternalLink
									label="Rosetta@home system requirements"
									href="https://boinc.berkeley.edu/wiki/List_of_projects_by_system_requirements"
								/>
								, you may also want to check out their{' '}
								<ExternalLink
									label="rules and policies"
									href="http://boinc.bakerlab.org/rosetta/info.php"
								/>
								.
							</Txt.p>
						</Tab>
					</Tabs>

					<Heading.h3 bold my={3}>
						Let's begin
					</Heading.h3>
					{isMainComputer ? (
						<>
							<Step index={1}>
								<Txt fontSize={2} mb={2} bold>
									Download and Install BOINC
								</Txt>
								<Button
									mb={3}
									ml={3}
									target="_blank"
									href="https://boinc.berkeley.edu/download.php"
									primary
								>
									Download
								</Button>
								<Ul>
									<li>
										<Txt my={1}>
											Open the BOINC file from your downloads folder,
											double-click the ‘Installer file’ and follow the
											instructions.
										</Txt>
									</li>
									<li>
										<Txt my={1}>
											Once the installation is complete, your BOINC dashboard
											should open automatically. If the ‘choose a project’
											window opens as well (as shown below), close this window
											by clicking cancel so you see only your main BOINC manager
											window, and continue to step 2
										</Txt>
									</li>
								</Ul>
								<Flex
									alignItems="center"
									justifyContent="center"
									maxHeight="300px"
									maxWidth="400px"
									pt={2}
								>
									<LazyImage src={boincStep1} alt="Flash card with Etcher" />
								</Flex>
							</Step>
							<Step index={2}>
								<Txt fontSize={2} mb={2} bold>
									Add the Rosetta@home Project
								</Txt>
								<Ul>
									<li>
										<Txt my={1}>In your BOINC manager, click ‘Add project’</Txt>{' '}
									</li>
									<li>
										<Txt my={1}>
											From the projects window, find and click to highlight the
											‘Rosetta@home’ project, then click ‘Next’
										</Txt>
									</li>
								</Ul>
								<Flex
									alignItems="center"
									justifyContent="center"
									maxHeight="300px"
									maxWidth="400px"
									pt={2}
								>
									<LazyImage src={boincStep2} alt="Flash card with Etcher" />
								</Flex>
								<Ul>
									<li>
										<Txt my={1}>
											You will now be asked to sign in or register for a BOINC
											account, enter your email address and password, and click
											‘Next’.
										</Txt>
									</li>
									<li>
										<Txt my={1}>
											If you’re an existing BOINC user the project will be added
											immediately, If you’ve just joined, you will be redirected
											to the BOINC website to complete registration.
										</Txt>
									</li>
								</Ul>
							</Step>
							<Step index={3}>
								<Txt fontSize={2} bold>
									Join Team balena!
								</Txt>
								<Txt mt={3}>
									To join our team, visit the{' '}
									<ExternalLink
										label="balena profile page"
										href="https://boinc.bakerlab.org/rosetta/team_display.php?teamid=18832"
									/>{' '}
									and click ‘Join this team’
								</Txt>
							</Step>
						</>
					) : (
						<>
							<Step index={1}>
								<Txt fontSize={2} bold>
									Download the Fold for Covid project software
								</Txt>
								<Txt my={3}>
									BalenaOS is the operating system (OS) for your{' '}
									{selectedDeviceType?.name} and is preconfigured to run Rosetta
									software. If your device is connecting via WiFi you'll need to
									input the credentials here. We don't save any details.{' '}
									<ExternalLink href="/how-does-it-work" label="Read more" />
								</Txt>
								<DownloadImage
									sdk={sdk}
									selectedApp={selectedApp}
									selectedDeviceType={selectedDeviceType}
								/>
							</Step>
							<Step index={2}>
								<Txt fontSize={2} bold>
									Download and install{' '}
									<ExternalLink
										href="https://balena.io/etcher"
										label="balenaEtcher"
									/>
								</Txt>
								<Txt my={3}>
									balenaEtcher is used to write the OS image you downloaded in
									Step 1 to your SD card.
								</Txt>
								<DownloadEtcher />
							</Step>
							<Step index={3}>
								<Txt fontSize={2} bold>
									Launch balenaEtcher and flash your SD card
								</Txt>
								<Txt my={3}>
									Launch balenaEtcher, choose the file you downloaded in Step 1,
									select your SD card and click "Flash". This will wipe all data
									on the card and prepare it for your {selectedDeviceType?.name}
									.
								</Txt>
								<Flex
									alignItems="center"
									justifyContent="center"
									maxHeight="300px"
									maxWidth="400px"
									pt={2}
								>
									<LazyImage src={flashCard} alt="Flash card with Etcher" />
								</Flex>
							</Step>
							<Step index={4}>
								<Txt fontSize={2} bold>
									Boot up your device and begin folding!
								</Txt>
								<Txt my={3}>
									Once the flashing process is complete, place the SD Card in
									your device, and power it on.
								</Txt>
								<Flex
									alignItems="center"
									justifyContent="center"
									maxHeight="300px"
									maxWidth="400px"
									pt={2}
								>
									<LazyImage src={insertCard} alt="Insert card in device" />
								</Flex>
								<Txt my={3}>
									Your {selectedDeviceType?.name} will automatically join the
									global fight, and begin crunching data!{' '}
									<ExternalLink
										href="/how-does-it-work"
										label="Read more about how this helps"
									/>
								</Txt>
								<Txt my={3}>
									To view your {selectedDeviceType?.name}'s current activity,
									visit your {selectedDeviceType?.name}’s new hostname,
									foldforcovid.local, in a web browser like this:{' '}
									<ExternalLink
										href="http://foldforcovid.local"
										label="foldforcovid.local"
									/>
								</Txt>
								<Flex
									alignItems="center"
									justifyContent="center"
									maxHeight="300px"
									maxWidth="500px"
									pt={2}
								>
									<LazyImage
										src={tasksImg}
										alt="Rosetta tasks on your device"
									/>
								</Flex>
								<Txt my={3}>
									If you have a display connected to your{' '}
									{selectedDeviceType?.name}, the statistics and current
									information will be shown there too.
								</Txt>
							</Step>
							<Step index={5}>
								<Txt fontSize={2} bold>
									Add as many devices as you can, and tell everyone you know!
								</Txt>
								<Txt my={3}>
									To add more devices simply flash the same OS image you
									downloaded in Step 1 to more SD cards and boot up more
									devices.
								</Txt>
							</Step>
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
};

export default GetStarted;
