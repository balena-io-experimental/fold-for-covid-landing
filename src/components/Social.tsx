import React from 'react';
import { Box, Flex, Heading, Button } from 'rendition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

const Social = () => {
	return (
		<Box mt={5} py={6} bg="#333" width="100%">
			<Flex
				mx="auto"
				maxWidth="800px"
				flexDirection={'column'}
				alignItems="center"
				justifyContent="center"
			>
				<Heading.h2
					align="center"
					fontSize={7}
					style={{ lineHeight: '1.1' }}
					color="#fff"
				>
					Tell everyone you know about this project so they too can help fight
					the pandemic!
				</Heading.h2>
				<Flex mt={4} alignItems="center" justifyContent="center">
					<Button icon={<FontAwesomeIcon icon={faTwitter} />} outline light>
						Twitter
					</Button>
					<Button
						icon={<FontAwesomeIcon icon={faFacebookSquare} />}
						outline
						light
						mx={3}
					>
						Facebook
					</Button>
					<Button icon={<FontAwesomeIcon icon={faInstagram} />} outline light>
						Instagram
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Social;
