import * as React from 'react';
import { Flex, Heading, Accordion, Txt, Button, List, Link } from 'rendition';
import { ExternalLink } from './ExternalLink';

const faqs = [
	{
		label: 'Why are we doing this?',
		panel: (
			<>
				At <ExternalLink label="balena" href="https://balena.io" />, we love
				open source initiatives that try to make the world a better place. After
				learning about the{' '}
				<ExternalLink
					label="Rosetta team’s great work"
					href="https://boinc.bakerlab.org/"
				/>
				, we felt we could help make an impact by allowing folks to easily add
				their spare computers and devices to the platform.
				<br />
				<br />
				Lending our engineering expertise to streamline the process, including
				fantastic community support, we created the Fold for Covid project to
				help promote the project and try to get as many people involved as we
				can, so that scientists and researchers can start to identify potential
				treatments for COVID-19 as quickly as possible. Learn more about the
				project by{' '}
				<ExternalLink
					label="reading this blog post"
					href="https://www.balena.io/blog/balena-enables-more-devices-to-join-rosetta-home-to-research-covid-19/"
				/>
				.
				<br />
				<br />
				Try the project out, come join us on the{' '}
				<ExternalLink
					label="Forums"
					href="https://forums.balena.io/c/fold-for-covid/"
				/>
				, submit fixes or improvements, or add features to the{' '}
				<ExternalLink
					label="Fold for Covid Github repository"
					href="https://github.com/balenalabs/rosetta-at-home"
				/>
				.
			</>
		),
	},
	{
		label: 'What is Rosetta@Home?',
		panel: (
			<>
				<ExternalLink label="Rosetta" href="https://boinc.bakerlab.org" /> is a
				distributed computing project, run by the{' '}
				<ExternalLink
					label="Baker Lab at the University of Washington"
					href="https://bakerlab.org"
				/>
				. Researchers are studying protein binding, to help find compounds that
				bind to the “spike” protein on the coronavirus molecule.
			</>
		),
	},
	{
		label: 'How does distributed computing work?',
		panel:
			'In distributed computing models, users “donate” their computing power to scientists and researchers by installing a small piece of software that downloads simulations and runs them while you are not using your computer.',
	},
	{
		label: 'What is my device actually doing?',
		panel:
			'Your device is calculating complex simulations of proteins, looking for possible binding proteins that attach to the “spike” on a Covid-19 molecule. It downloads work packages from Rosetta, performs the simulations and uploads the results.',
	},
	{
		label: 'How does this help?',
		panel: (
			<>
				Scientists and researchers are hoping that if they can “cover up” the
				spikes, the virus will be less capable of entering healthy cells.{' '}
				<ExternalLink label="Read more" href="/how-does-it-help" />
			</>
		),
	},
	{
		label: 'How many devices can I add?',
		panel: 'There is no limit to the number of devices you can add.',
	},
	{
		label: 'How do I make my old laptop boot from the USB stick?',
		panel: (
			<>
				If your spare laptop doesn't boot the USB stick immediately, fear not.
				You might have to restart the laptop and enter its BIOS settings. This
				is typically done by restarting your laptop, waiting for the motherboard
				loading screen to appear, and pressing either the DELETE key or a
				function (F1,F2, etc.) key depending on the brand and type of
				motherboard. For instance, ASUS motherboards require you to press DELETE
				to access BIOS settings.
				<br />
				<br />
				From there, access your Boot Options and move the USB drive to the first
				position (meaning it'll look there for an OS to boot first). Please
				consult your specific motherboard manual for more details about boot
				order.
			</>
		),
	},
	{
		label: 'Can I see what the device is doing and review my results?',
		panel: (
			<>
				Yes! After your device is flashed and powered up, simply open up a web
				browser on another computer on the same network. Enter the address:{' '}
				<ExternalLink
					href="http://foldforcovid.local"
					label="http://foldforcovid.local"
				/>
				, and you will see the jobs your device(s) are currently running. If you
				have more than one device, the device names will increment like so:
				<ExternalLink
					href="http://foldforcovid-2.local"
					label="http://foldforcovid-2.local"
				/>
				,{' '}
				<ExternalLink
					href="http://foldforcovid-3.local"
					label="http://foldforcovid-3.local"
				/>
				<br />
				<br />
				The local hostname requires a multicast DNS (mDNS) service like Bonjour
				or Avahi:
				<List m={3}>
					<Txt>
						On Windows, check if 'Bonjour' is installed (Control Panel >
						Programs and Features). If not, you can download Bonjour for Windows
						from{' '}
						<Link href="https://support.apple.com/kb/DL999">
							https://support.apple.com/kb/DL999
						</Link>
					</Txt>
					<Txt>
						Most 'desktop' Linux distributions ship with Avahi. Search for the
						installation command for your distribution. E.g. for Ubuntu: sudo
						apt-get install avahi-daemon
					</Txt>
					<Txt>macOS comes with Bonjour built-in.</Txt>
				</List>
			</>
		),
	},
	{
		label: 'It seems like my device is not getting any work units to process?',
		panel: (
			<>
				On occasion, the Baker Lab does run out of work units to send users.
				They are quick to make more, so sit tight, and give it a few hours until
				the queue is refilled with jobs. You can view the queue status here:{' '}
				<ExternalLink
					href="https://boinc.bakerlab.org/rosetta/server_status.php"
					label="boinc.bakerlab.org/rosetta/server_status.php"
				/>
			</>
		),
	},
	{
		label: 'Does my device have enough memory (RAM)?',
		panel: (
			<>
				This project supports devices with 1GB of RAM (or greater). However,
				sometimes the work queue will run out of jobs that run on devices with
				lower amounts of memory. This simply means your device will sit idle
				until jobs that have lower memory requirements are submitted by
				researchers. It's still great to have your device online and available
				for work. In this case you'll see a message that says something like
				"Rosetta needs 1907.35 MB RAM but only 966.82 MB is available for use.".
			</>
		),
	},
	{
		label: 'Is this project safe to run?',
		panel: (
			<>
				Running Fold for Covid is safe and secure. If using Wi-Fi connectivity,
				we pass the login credentials directly to your device. The device itself
				is connected securely to the Rosetta@home project, where jobs are
				assigned and conducted on the device, and then sent back to
				Rosetta@home. For more information specific about Rosetta@home, please
				visit{' '}
				<ExternalLink
					label="their site"
					href="http://boinc.bakerlab.org/rosetta/"
				/>{' '}
				and{' '}
				<ExternalLink
					label="forums"
					href="https://boinc.bakerlab.org/rosetta/forum_index.php"
				/>
				.
			</>
		),
	},
	{
		label: 'Help, something’s not working!',
		panel: (
			<>
				Let us know in{' '}
				<ExternalLink
					href="https://forums.balena.io/c/fold-for-covid/"
					label="our Forums!"
				/>
			</>
		),
	},
];

const FAQs = () => {
	const sortedFaqs = faqs.sort(function (a, b) {
		const x = a.label;
		const y = b.label;
		return x < y ? -1 : x > y ? 1 : 0;
	});

	return (
		<Flex
			id="faqs"
			mt={5}
			mx="auto"
			maxWidth="1280px"
			flexDirection={'column'}
			px={[0, 5]}
		>
			<Heading.h2 mx={2} px={1} my={3} bold>
				Frequently asked questions
			</Heading.h2>
			<Accordion items={sortedFaqs as any}></Accordion>

			<Flex my={5} pl={3}>
				<Txt fontSize={4} bold>
					Need more Help?
				</Txt>
				<Button
					mx={3}
					target="_blank"
					primary
					href="https://forums.balena.io/c/fold-for-covid/"
				>
					See forums
				</Button>
			</Flex>
		</Flex>
	);
};

export default FAQs;
