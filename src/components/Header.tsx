import * as React from 'react';
import { Flex, Box, Txt, Link as RLink, Button } from 'rendition';
import ProjectLogo from './ProjectLogo';
import { Link as InternalLink, useRouteMatch } from 'react-router-dom';
interface LinkProps {
	href: string;
	label: string;
	external?: boolean;
	dark?: boolean;
}

const Link = (props: LinkProps) => {
	let externalProps = {};
	if (props.external) {
		externalProps = { blank: true, rel: 'noreferrer noopener' };
	}
	return (
		<RLink
			color={props.dark ? 'text.main' : '#fff'}
			fontSize={0}
			href={props.href}
			pr={3}
			{...externalProps}
		>
			<Txt.span pl={1} bold>
				{props.label}
			</Txt.span>
		</RLink>
	);
};

const Header = () => {
	const match = useRouteMatch('/');
	const renderDarkMode = match?.isExact;
	return (
		<Flex
			width="100%"
			flexDirection="column"
			justifyContent="space-between"
			bg={renderDarkMode ? 'text.main' : '#fff'}
		>
			<Box mx="auto" mt={2} py={3} width="100%" maxWidth="1215px">
				<Flex
					alignItems="center"
					flexDirection={['column', 'column', 'row', 'row']}
					justifyContent="space-between"
				>
					<Flex flex={1}>
						<InternalLink to="/">
							<ProjectLogo dark={!renderDarkMode} />
						</InternalLink>
					</Flex>
					<Box py={[3, 3, 0, 0]}>
						<Link
							dark={!renderDarkMode}
							href="/about-the-project"
							label="About the project"
						/>
						<Link
							dark={!renderDarkMode}
							href="/how-does-it-work"
							label="How does it work?"
						/>
						<Link dark={!renderDarkMode} href="/#community" label="Community" />
						<Link dark={!renderDarkMode} href="/#faqs" label="FAQs" />
						<Link
							dark={!renderDarkMode}
							href="https://github.com/balenalabs/rosetta-at-home"
							external
							label="Github"
						/>
					</Box>
					<Flex alignSelf={['center', 'center', 'flex-end']}>
						<Button
							href="/#get-started"
							label="Get Started"
							outline={renderDarkMode}
							light={renderDarkMode}
							primary={!renderDarkMode}
						/>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Header;
