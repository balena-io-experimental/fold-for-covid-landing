import React from 'react';
import { Flex, Txt, Img } from 'rendition';
import logoOnDark from '../img/logo-on-dark.svg';
import logoOnWhite from '../img/logo-on-white.svg';

const ProjectLogo = ({ dark }: { dark?: boolean }) => {
	const logo = dark ? logoOnWhite : logoOnDark;

	return (
		<Flex alignItems="center">
			<Txt
				whitespace="nowrap"
				fontSize={2}
				bold
				color={dark ? 'text.main' : '#fff'}
			>
				<Img style={{ height: 20 }} src={logo} alt="Balena logo" />
			</Txt>
		</Flex>
	);
};

export default ProjectLogo;
