import React from 'react';
import { Box, Flex, Heading, Button } from 'rendition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

const Social = () => {
	return (
		<Box id="social" py={[5, 5, 6]} bg="#333" width="100%">
			<Flex
				mx="auto"
				maxWidth="800px"
				flexDirection={'column'}
				alignItems="center"
				px={3}
				justifyContent="center"
			>
				<Heading.h2 align="center" fontSize={[5, 5, 5, 6]} color="#fff">
					Add as many devices as you can, and tell everyone you know
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
						primary
						target="_blank"
						href="https://twitter.com/share?url=https%3A%2F%2Ffoldforcovid.io&text=I%E2%80%99m%20fighting%20%23coronavirus%20using%20my%20Raspberry%20Pi%20or%20old%20laptop%2C%20visit%20foldforcovid.io%20to%20set%20up%20your%20own%20and%20join%20the%20fight!%20%23foldforcovid%20%40RosettaAtHome%20%40balena_io"
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
						href="https://www.facebook.com/sharer.php?s=100&p[url]=https%3A%2F%2Ffoldforcovid.io"
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
						href="https://www.linkedin.com/shareArticle/?url=https%3A%2F%2Ffoldforcovid.io&mini=true"
					>
						Linkedin
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Social;
