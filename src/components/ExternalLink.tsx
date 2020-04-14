import React from 'react';
import { Link } from 'rendition';

export interface ExternalLinkProps {
	href: string;
	label: string;
}

export const ExternalLink = ({ href, label }: ExternalLinkProps) => (
	<Link
		href={href}
		blank
		rel="noopener noreferrer"
		color="text.main"
		display="inline"
		style={{ fontWeight: 'bold', textDecoration: 'underline' }}
	>
		{label}
	</Link>
);
