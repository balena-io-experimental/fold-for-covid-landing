import * as React from 'react';
import { Flex, Heading, Accordion, Txt, Button } from 'rendition';
import { ExternalLink } from './ExternalLink';

const faqs = [
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
			'Your device is calculating complex simulations of proteins, looking for possible binding proteins that attach to the “spike” on a Covid-19 molecule.',
	},
	{
		label: 'How does this help?',
		panel:
			'Scientists and researchers are hoping that if they can “cover up” the spikes, the virus will be less capable of entering healthy cells.',
	},
	{
		label: 'How many devices can I add?',
		panel: 'There is no limit to the number of devices you can add.',
	},
	{
		label: 'Can I review my results?',
		panel: (
			<>
				After your device is flashed and powered up, simply open up a web
				browser on another computer on the same network. Enter the address:{' '}
				<ExternalLink
					href="http://foldforcovid.local"
					label="foldforcovid.local"
				/>
				, and you will see the jobs your device(s) are currently running.
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
];

const FAQs = () => {
	return (
		<Flex
			id="faqs"
			mt={5}
			maxWidth="960px"
			flexDirection={'column'}
			px={[0, 5]}
		>
			<Heading.h2 mx={2} fontSize={[5, 5, 6, 6]} px={1} my={3} bold>
				Frequently asked questions
			</Heading.h2>
			<Accordion items={faqs as any}></Accordion>

			<Flex my={5} pl={3}>
				<Txt fontSize={3} bold>
					Need more Help?
				</Txt>
				<Button mx={3} target="_blank" primary href="https://forums.balena.io">
					See forums
				</Button>
			</Flex>
		</Flex>
	);
};

export default FAQs;
