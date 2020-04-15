import React from 'react';
import { Flex, Txt } from 'rendition';

const ProjectLogo = ({ dark }: { dark?: boolean }) => {
	return (
		<Flex alignItems="center">
			<Txt whitespace="nowrap" bold color={dark ? 'text.main' : '#fff'}>
				Fold for covid
			</Txt>
		</Flex>
	);
};

export default ProjectLogo;
