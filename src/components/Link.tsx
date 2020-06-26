import * as React from 'react';
import { Link as RLink, Txt } from 'rendition';
import { HashLink as InternalLink } from 'react-router-hash-link';

interface LinkProps {
	href: string;
	children?: React.ReactNode;
	external?: boolean;
	dark?: boolean;
}

export const Link = (props: LinkProps) => {
	let externalProps = {};
	const LinkComponent = props.external ? RLink : InternalLink;
	if (props.external) {
		externalProps = {
			blank: true,
			rel: 'noreferrer noopener',
			href: props.href,
		};
	}

	return (
		<LinkComponent
			to={props.href}
			style={{ textDecoration: 'none' }}
			{...externalProps}
		>
			<Txt.span pl={1} pr={3} bold color={props.dark ? 'text.main' : '#fff'}>
				{props.children}
			</Txt.span>
		</LinkComponent>
	);
};
