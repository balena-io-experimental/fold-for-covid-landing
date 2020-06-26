import React from 'react';
import { Box, Flex, Heading, Button } from 'rendition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {
	TWITTER_SHARE_URL,
	FACEBOOK_SHARE_URL,
	LINKEDIN_SHARE_URL,
} from '../constants';

const Social = () => {
	return (
		<Box id="social" py={[5, 5, 6]} bg="#333" width="100%">
			<Flex
				mx="auto"
				maxWidth="960px"
				flexDirection={'column'}
				alignItems="center"
				px={3}
				justifyContent="center"
			>
				<Heading.h2
					align="center"
					style={{ lineHeight: 1.1 }}
					color="#fff"
					bold
				>
					Add as many devices as you can, and tell everyone you know
				</Heading.h2>
				<Flex
					alignItems="center"
					flexDirection={['column', 'row']}
					justifyContent="center"
					mt={4}
				>
					<Button
						mb={3}
						mr={3}
						minWidth={145}
						icon={<FontAwesomeIcon icon={faTwitter} />}
						primary
						target="_blank"
						href={TWITTER_SHARE_URL}
					>
						Twitter
					</Button>
					<Button
						icon={<FontAwesomeIcon icon={faFacebookSquare} />}
						primary
						minWidth={145}
						mb={3}
						mr={3}
						target="_blank"
						href={FACEBOOK_SHARE_URL}
					>
						Facebook
					</Button>

					<Button
						mb={3}
						mr={3}
						minWidth={145}
						icon={<FontAwesomeIcon icon={faLinkedinIn} />}
						primary
						target="_blank"
						href={LINKEDIN_SHARE_URL}
					>
						Linkedin
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Social;
