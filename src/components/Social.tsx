import React from 'react';
import { Box, Flex, Heading, Button } from 'rendition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

const Social = () => {
	return (
		<Box id="social" mt={5} py={[5, 5, 6]} bg="#333" width="100%">
			<Flex
				mx="auto"
				maxWidth="800px"
				flexDirection={'column'}
				alignItems="center"
				px={3}
				justifyContent="center"
			>
				<Heading.h2 align="center" fontSize={[5, 5, 5, 6]} color="#fff">
					Tell everyone you know about this project so they too can help fight
					the pandemic!
				</Heading.h2>
				<Flex
					alignItems="center"
					flexDirection={['column', 'row']}
					justifyContent="center"
					mt={[4, 4, 3]}
				>
					<Button
						mb={3}
						mr={3}
						minWidth={145}
						icon={<FontAwesomeIcon icon={faTwitter} />}
						outline
						light
					>
						Twitter
					</Button>
					<Button
						icon={<FontAwesomeIcon icon={faFacebookSquare} />}
						outline
						light
						minWidth={145}
						mb={3}
						mr={3}
					>
						Facebook
					</Button>
					<Button
						mb={3}
						mr={3}
						minWidth={145}
						icon={<FontAwesomeIcon icon={faInstagram} />}
						outline
						light
					>
						Instagram
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Social;
