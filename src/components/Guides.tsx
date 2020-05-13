import React from 'react';
import { Flex, Alert, Txt, Button, Link } from 'rendition';
import { DownloadImage } from './DownloadImage';
import { ExternalLink } from './ExternalLink';
import rpiCard from '../img/insert-sd.gif';
import jetsonNanoCard from '../img/jetson-nano-card.jpg';
import flashCard from '../img/etcher.gif';
import tasksImg from '../img/tasks.png';
import { DownloadEtcher } from './DownloadEtcher';
import { LazyImage } from './LazyImage';
import BalenaSdk from 'balena-sdk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import {
	TWITTER_SHARE_URL,
	FACEBOOK_SHARE_URL,
	LINKEDIN_SHARE_URL,
} from '../constants';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

const renderGenericInfo = (deviceName?: string) => (
	<Txt.p>
		Getting started on a <Txt.span bold>{deviceName}</Txt.span> is simple!
		Follow these steps to download our ready-made operating system, flash it to
		an SD Card, and begin crunching data to help scientists!
	</Txt.p>
);

const renderDownloadEtcher = () => (
	<>
		<Txt fontSize={2} bold>
			Download and install{' '}
			<ExternalLink href="https://balena.io/etcher" label="balenaEtcher" />
		</Txt>
		<Txt my={3}>
			balenaEtcher is used to write the OS image you downloaded in Step 1 to
			your SD card.
		</Txt>
		<DownloadEtcher />
	</>
);

const renderDownloadOS = (
	sdk: BalenaSdk.BalenaSDK,
	app?: BalenaSdk.Application,
	deviceType?: BalenaSdk.DeviceType,
) => (
	<>
		<Txt fontSize={2} bold>
			Download the Fold for Covid project software
		</Txt>
		<Txt my={3}>
			BalenaOS is the operating system (OS) for your {deviceType?.name} and is
			preconfigured to run Rosetta software. If your device is connecting via
			WiFi you'll need to input the credentials here. We don't save any details.{' '}
			<ExternalLink href="/how-does-it-work" label="Read more" />
		</Txt>
		<DownloadImage
			sdk={sdk}
			selectedApp={app}
			selectedDeviceType={deviceType}
		/>
	</>
);

const renderLaunchEtcher = (deviceName?: string) => (
	<>
		<Txt fontSize={2} bold>
			Launch balenaEtcher and flash your SD card
		</Txt>
		<Txt my={3}>
			Launch balenaEtcher, choose the file you downloaded in Step 1, select your
			SD card and click "Flash". This will wipe all data on the card and prepare
			it for your {deviceName}.
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
	</>
);

const renderLaunchEtcherUsb = (deviceName?: string) => (
	<>
		<Txt fontSize={2} bold>
			Launch balenaEtcher and flash your USB flash drive
		</Txt>
		<Txt my={3}>
			Launch balenaEtcher, choose the file you downloaded in Step 1, select your
			USB flash drive and click “Flash”. Note: this will wipe all data on the
			drive and prepare it to install the project.
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
	</>
);

const renderBootUsb = () => (
	<>
		<Txt fontSize={2} bold>
			Once complete, plug the USB stick into your computer, and power it on
		</Txt>
		<Txt my={3}>
			If your computer does not automatically boot from the USB device, you may
			need to change its bootup order, or manually choose to boot from USB. Once
			the install process completes, the device will shut down and power off.
		</Txt>
	</>
);

const renderPowerItOn = () => (
	<>
		<Txt fontSize={2} bold>
			Remove the USB stick and power it back on
		</Txt>
		<Txt my={3}>
			Your computer will automatically join the global fight, and begin
			crunching data! Read more about how this helps
		</Txt>
		<Txt my={3}>
			To view your device’s current activity, simply visit your device’s new
			hostname, foldforcovid.local, in a web browser like this:{' '}
			<ExternalLink
				label="http://foldforcovid.local"
				href="http://foldforcovid.local"
			/>
		</Txt>
		<Txt my={3}>
			<Txt bold>Note</Txt> a multicast (mDNS) services like Bonjour or Avahi is
			required for the local hostname to work. Find out more in{' '}
			<Link href="#faqs">our FAQ</Link>.
		</Txt>
		<Flex
			alignItems="center"
			justifyContent="center"
			maxHeight="300px"
			maxWidth="500px"
			pt={2}
		>
			<LazyImage src={tasksImg} alt="Rosetta tasks on your device" />
		</Flex>
		<Txt my={3}>
			Your device’s activity should also show up on your computer’s monitor.
			Additionally, if you set up a laptop, you can close the lid and it will
			keep crunching data.
		</Txt>
	</>
);

const renderInsertSDCard = (imgSrc: string, deviceName?: string) => (
	<>
		<Txt fontSize={2} bold>
			Boot up your device and begin folding!
		</Txt>
		<Txt my={3}>
			Once the flashing process is complete, place the SD Card in your device,
			and power it on.
		</Txt>
		<Flex
			alignItems="center"
			justifyContent="center"
			maxHeight="300px"
			maxWidth="400px"
			pt={2}
		>
			<LazyImage src={imgSrc} alt="Insert card in device" />
		</Flex>
		<Txt my={3}>
			Your {deviceName} will automatically join the global fight, and begin
			crunching data!{' '}
			<ExternalLink
				href="/how-does-it-work"
				label="Read more about how this helps"
			/>
		</Txt>
		<Txt my={3}>
			To view your {deviceName}'s current activity, visit your {deviceName}’s
			new hostname, foldforcovid.local, in a web browser like this:{' '}
			<ExternalLink
				href="http://foldforcovid.local"
				label="foldforcovid.local"
			/>
		</Txt>
		<Txt my={3}>
			<Txt bold>Note</Txt> a multicast (mDNS) services like Bonjour or Avahi is
			required for the local hostname to work. Find out more in{' '}
			<Link href="#faqs">our FAQ</Link>.
		</Txt>
		<Flex
			alignItems="center"
			justifyContent="center"
			maxHeight="300px"
			maxWidth="500px"
			pt={2}
		>
			<LazyImage src={tasksImg} alt="Rosetta tasks on your device" />
		</Flex>
		<Txt my={3}>
			If you have a display connected to your {deviceName}, the statistics and
			current information will be shown there too.
		</Txt>
	</>
);

const renderBootSbc = (deviceName?: string) => (
	<>
		<Txt fontSize={2} bold>
			Boot up your device and begin folding!
		</Txt>
		<Txt my={3}>
			Once the flashing process is complete, if applicable, place the SD Card in
			your device, and power it on.
		</Txt>
		<Txt my={3}>
			Your {deviceName} will automatically join the global fight, and begin
			crunching data!{' '}
			<ExternalLink
				href="/how-does-it-work"
				label="Read more about how this helps"
			/>
		</Txt>
		<Txt my={3}>
			To view your {deviceName}'s current activity, visit your {deviceName}’s
			new hostname, foldforcovid.local, in a web browser like this:{' '}
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
			<LazyImage src={tasksImg} alt="Rosetta tasks on your device" />
		</Flex>
		<Txt my={3}>
			If you have a display connected to your {deviceName}, the statistics and
			current information will be shown there too.
		</Txt>
	</>
);

const renderSocialShare = () => (
	<Txt fontSize={2}>
		<Button
			icon={<FontAwesomeIcon style={{ fontSize: 20 }} icon={faTwitter} />}
			primary
			target="_blank"
			href={TWITTER_SHARE_URL}
			plain
			emphasized
			mr={3}
		/>
		<Button
			icon={
				<FontAwesomeIcon style={{ fontSize: 20 }} icon={faFacebookSquare} />
			}
			primary
			target="_blank"
			href={FACEBOOK_SHARE_URL}
			plain
			mr={3}
		/>
		<Button
			icon={<FontAwesomeIcon style={{ fontSize: 20 }} icon={faLinkedinIn} />}
			primary
			target="_blank"
			href={LINKEDIN_SHARE_URL}
			plain
			mr={3}
		/>
	</Txt>
);

const renderSuccess = () => (
	<>
		<Txt fontSize={2} bold>
			Add as many devices as you can, and tell everyone you know!
		</Txt>
		<Txt my={3}>
			To add more devices simply flash the same OS image you downloaded in Step
			1 to more SD cards and boot up more devices.
		</Txt>
		{renderSocialShare()}
	</>
);

const renderUsbSuccess = () => (
	<>
		<Txt fontSize={2} bold>
			Add as many devices as you can, and tell everyone you know!
		</Txt>
		<Txt my={3}>
			To add more devices simply use the same USB flash drive you flashed in
			step one to set up more spare computers with the project.
		</Txt>
		{renderSocialShare()}
	</>
);

const guides: any = {
	'raspberrypi4-64': (
		sdk: BalenaSdk.BalenaSDK,
		app?: BalenaSdk.Application,
		deviceType?: BalenaSdk.DeviceType,
	) => ({
		intro: renderGenericInfo(deviceType?.name),
		steps: [
			renderDownloadOS(sdk, app, deviceType),
			renderDownloadEtcher(),
			renderLaunchEtcher(deviceType?.name),
			renderInsertSDCard(rpiCard, deviceType?.name),
			renderSuccess(),
		],
	}),

	'raspberrypi3-64': (
		sdk: BalenaSdk.BalenaSDK,
		app?: BalenaSdk.Application,
		deviceType?: BalenaSdk.DeviceType,
	) => ({
		intro: (
			<>
				{renderGenericInfo(deviceType?.name)}

				<Txt.p mt={3}>
					<Alert info>
						Occasionally you may see a message like "Rosetta needs 1907.35 MB
						RAM but only 966.82 MB is available for use.", this simply means
						there are no tasks present in the queue at that time - keep your
						device online and more will be added soon! Read more in{' '}
						<Link href="#faqs">our FAQ</Link>.
					</Alert>
				</Txt.p>
			</>
		),
		steps: [
			renderDownloadOS(sdk, app, deviceType),
			renderDownloadEtcher(),
			renderLaunchEtcher(deviceType?.name),
			renderInsertSDCard(rpiCard, deviceType?.name),
			renderSuccess(),
		],
	}),

	'jetson-nano': (
		sdk: BalenaSdk.BalenaSDK,
		app?: BalenaSdk.Application,
		deviceType?: BalenaSdk.DeviceType,
	) => ({
		intro: renderGenericInfo(deviceType?.name),
		steps: [
			renderDownloadOS(sdk, app, deviceType),
			renderDownloadEtcher(),
			renderLaunchEtcher(deviceType?.name),
			renderInsertSDCard(jetsonNanoCard, deviceType?.name),
			renderSuccess(),
		],
	}),
};

const genericGuide: any = {
	aarch64: (
		sdk: BalenaSdk.BalenaSDK,
		app?: BalenaSdk.Application,
		deviceType?: BalenaSdk.DeviceType,
	) => ({
		intro: renderGenericInfo(deviceType?.name),
		steps: [
			renderDownloadOS(sdk, app, deviceType),
			renderDownloadEtcher(),
			renderLaunchEtcher(deviceType?.name),
			renderBootSbc(deviceType?.name),
			renderSuccess(),
		],
	}),
	amd64: (
		sdk: BalenaSdk.BalenaSDK,
		app?: BalenaSdk.Application,
		deviceType?: BalenaSdk.DeviceType,
	) => ({
		intro: (
			<>
				<Txt.p>
					Getting started on an unused laptop or desktop PC is easy! Follow
					these steps to download our ready-made operating system, flash it to a
					USB stick, and begin crunching data to help scientists!
				</Txt.p>

				<Txt.p mt={3}>
					<Alert emphasized danger>
						This project is intended to be used on a spare, unused computer. It
						will overwrite your existing hard drive contents, causing loss of
						ALL data on the computer. Only run this on a device that you don’t
						plan on using.
					</Alert>
				</Txt.p>
			</>
		),
		steps: [
			renderDownloadOS(sdk, app, deviceType),
			renderDownloadEtcher(),
			renderLaunchEtcherUsb(),
			renderBootUsb(),
			renderPowerItOn(),
			renderUsbSuccess(),
		],
	}),
};

export const getDeviceGuide = (
	sdk: BalenaSdk.BalenaSDK,
	app?: BalenaSdk.Application,
	deviceType?: BalenaSdk.DeviceType,
	arch?: string,
) => {
	if (!deviceType || !arch) return { intro: '', steps: [] };
	if (guides[deviceType?.slug])
		return guides[deviceType?.slug](sdk, app, deviceType);
	return genericGuide[arch](sdk, app, deviceType);
};
