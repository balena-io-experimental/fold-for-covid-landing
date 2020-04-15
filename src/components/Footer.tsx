import * as React from 'react';
import { Flex, Box, Txt, Link } from 'rendition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import ProjectLogo from './ProjectLogo';

const socialLinks = [
	{ href: 'https://github.com/balena-io', icon: faGithub, label: 'Github' },
	{ href: 'https://twitter.com/balena_io', icon: faTwitter, label: 'Twitter' },
	{
		href: 'https://facebook.com/balenacloud',
		icon: faFacebookSquare,
		label: 'Facebook',
	},
	{
		href: 'https://instagram.com/balena_io',
		icon: faInstagram,
		label: 'Instagram',
	},
	{
		href: 'https://linkedin.com/company/balenaio',
		icon: faLinkedinIn,
		label: 'Linkedin',
	},
];

interface SocialLinkProps {
	href: string;
	icon: any;
	label: string;
}
const SocialLink = (props: SocialLinkProps) => (
	<Link
		color="#fff"
		blank
		rel="noreferrer noopener"
		fontSize={0}
		href={props.href}
		mr={3}
		my={[1, 1, 0, 0]}
	>
		<FontAwesomeIcon icon={props.icon} />
		<Txt.span display="inline-block" pl={1} bold>
			{props.label}
		</Txt.span>
	</Link>
);

const Footer = () => {
	return (
		<Flex
			height={['auto']}
			width="100%"
			flexDirection="column"
			justifyContent="space-between"
			bg="#333333"
		>
			<Box mx="auto" my={3} px={3} width="100%" maxWidth="1280px">
				<Flex
					alignItems={['flex-start', 'flex-start', 'center', 'center']}
					flexDirection={['column', 'column', 'row', 'row']}
					justifyContent="space-between"
				>
					<Flex flex={[1, 1, 1, 1]}>
						<ProjectLogo />
					</Flex>
					<Flex
						flex={[1, 1, 2, 1]}
						pt={[3, 3, 0, 0]}
						justifyContent={[
							'flex-start',
							'flex-start',
							'flex-end',
							'flex-end',
						]}
						flexDirection={['column', 'row', 'row', 'row']}
					>
						{socialLinks.map((link) => (
							<SocialLink {...link} />
						))}
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Footer;
