import * as React from 'react';
import { Flex, Box, Txt, Link as RLink, Heading, Button } from 'rendition';
import styled from 'styled-components';

const VerticalDivider = styled.span`
	width: 1px;
	height: 16px;
	background: #63ba97;
	display: inline-block;
	margin: 0px 8px;
	vertical-align: middle;
`;

interface LinkProps {
	href: string;
	label: string;
	external?: boolean;
}

const Link = (props: LinkProps) => {
	let externalProps = {};
	if (props.external) {
		externalProps = { target: '_blank', rel: 'noreferrer noopener' };
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
						<Link href="#how-does-this-help" label="How does this help?" />
						<Link href="#community" label="Community" />
						<Link href="#faqs" label="FAQs" />
						<Link href="//github.com/balena.io/" external label="Github" />
						<Button label="Get Started" outline light />
					</Box>
				</Flex>
				<Box mt={4}>
					<Heading.h1
						style={{ lineHeight: '1.28' }}
						color="#fff"
						fontSize={7}
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
