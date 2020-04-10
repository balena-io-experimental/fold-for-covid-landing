import React from 'react';
import { Flex, Txt } from 'rendition';
import styled from 'styled-components';

const VerticalDivider = styled.div`
	width: 1px;
	min-height: 16px;
	height: 100%;
	background: #63ba97;
	display: inline-block;
	margin: 0px 8px;
	vertical-align: middle;
`;

const ProjectLogo = () => {
	return (
		<Flex alignItems="center">
			<Txt whitespace="nowrap" bold color="#fff">
				4R Project
			</Txt>
			<VerticalDivider />
			<Txt style={{ opacity: 0.7 }} pr={2} color="#fff" fontSize={0}>
				Reusing Redundant & Raspberry computers for Rosetta
			</Txt>
		</Flex>
	);
};

export default ProjectLogo;
