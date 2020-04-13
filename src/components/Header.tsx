import * as React from 'react';
import { Flex, Box, Txt, Link as RLink, Heading, Button } from 'rendition';
import ProjectLogo from './ProjectLogo';

interface LinkProps {
	href: string;
	label: string;
	external?: boolean;
}

const Link = (props: LinkProps) => {
	let externalProps = {};
	if (props.external) {
		externalProps = { blank: true, rel: 'noreferrer noopener' };
	}
	return (
		<RLink
			color="#fff"
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
	return (
		<Flex
			width="100%"
			flexDirection="column"
			justifyContent="space-between"
			bg="#333333"
		>
			<Box mx="auto" my={3} px={3} width="100%" maxWidth="1215px">
				<Flex
					alignItems="center"
					flexDirection={['column', 'column', 'row', 'row']}
					justifyContent="space-between"
				>
					<Flex flex={1}>
						<ProjectLogo />
					</Flex>
					<Box py={[3, 3, 0, 0]}>
						<Link href="#how-does-this-help" label="How does this help?" />
						<Link href="#community" label="Community" />
						<Link href="#faqs" label="FAQs" />
						<Link
							href="https://github.com/balena-io/"
							external
							label="Github"
						/>
					</Box>
					<Flex alignSelf={['center', 'center', 'flex-end']}>
						<Button label="Get Started" outline light />
					</Flex>
				</Flex>
				<Box mt={4}>
					<Heading.h1
						style={{ lineHeight: '1.28' }}
						color="#fff"
						fontSize={[5, 6, 7, 7]}
						bold
					>
						Help fight the COVID-19 pandemic with your old laptop, Raspberry Pi,
						or other spare computer
					</Heading.h1>
				</Box>
			</Box>
		</Flex>
	);
};

export default Header;
