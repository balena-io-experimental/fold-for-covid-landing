import * as React from 'react';
import { Flex, Box, Txt, Link } from 'rendition';
import logo from '../img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import styled from 'styled-components';

const socialLinks = [
	{ href: '//github.com/balena-io', icon: faGithub, label: 'Github' },
	{ href: '//twitter.com/balena_io', icon: faTwitter, label: 'Twitter' },
	{
		href: '//facebook.com/balenacloud',
		icon: faFacebookSquare,
		label: 'Facebook',
	},
	{ href: '//instagram.com/balena_io', icon: faInstagram, label: 'Instagram' },
	{
		href: '//linkedin.com/company/balenaio',
		icon: faLinkedinIn,
		label: 'Linkedin',
	},
];

const VerticalDivider = styled.span`
	width: 1px;
	height: 16px;
	background: #63ba97;
	display: inline-block;
	margin: 0px 8px;
	vertical-align: middle;
`;

interface SocialLinkProps {
	href: string;
	icon: any;
	label: string;
}
const SocialLink = (props: SocialLinkProps) => (
	<Link
		color="#fff"
		target="_blank"
		rel="noreferrer noopener"
		fontSize={0}
		href={props.href}
		pr={3}
	>
		<FontAwesomeIcon icon={props.icon} />{' '}
		<Txt.span pl={1} bold>
			{props.label}
		</Txt.span>
	</Link>
);

const Footer = () => {
	return (
		<Flex
			height={100}
			width="100%"
			flexDirection="column"
			justifyContent="space-between"
			bg="#333333"
		>
			<Box mx="auto" my={3} width="100%" maxWidth="1215px">
				<Flex alignItems="center" justifyContent="space-between">
					<Box>
						<Txt.span bold color="#fff">
							4R Project
						</Txt.span>
						<VerticalDivider />
						<Txt.span style={{ opacity: 0.7 }} color="#fff" fontSize={0}>
							Reusing Redundant & Raspberry computers for Rosetta
						</Txt.span>
					</Box>
					<Box>
						{socialLinks.map((link) => (
							<SocialLink {...link} />
						))}
					</Box>
				</Flex>
				<Box mt={3}>
					<Txt.span pr={2} fontSize={0} color="#fff">
						This project made possible by
					</Txt.span>
					<span>
						<img
							alt="Balena"
							src={logo}
							style={{ height: 17, verticalAlign: 'middle', paddingBottom: 2 }}
						/>
					</span>
				</Box>
			</Box>
		</Flex>
	);
};

export default Footer;
