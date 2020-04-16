import * as React from 'react';
import { Flex, Box, Txt, Button } from 'rendition';
import ProjectLogo from './ProjectLogo';
import { useRouteMatch } from 'react-router-dom';
import { Link } from './Link';

const Header = () => {
	const match = useRouteMatch('/');
	const renderDarkMode = match?.isExact;
	return (
		<Flex
			width="100%"
			flexDirection="column"
			justifyContent="space-between"
			bg={renderDarkMode ? 'text.main' : '#fff'}
		>
			<Box mx="auto" mt={2} py={3} width="100%" px={3} maxWidth="1280px">
				<Flex
					alignItems="center"
					flexDirection={['column', 'column', 'column', 'row']}
					justifyContent="space-between"
				>
					<Flex flex={1}>
						<Link href="/">
							<Flex
								alignItems="center"
								justifyContent="center"
								flexDirection="column"
							>
								<ProjectLogo dark={!renderDarkMode} />
							</Flex>
						</Link>
					</Flex>
					<Flex
						alignItems="center"
						justifyContent="center"
						flexDirection={['column', 'column', 'row']}
					>
						<Box>
							<Txt align="center" py={[3, 3, 0, 0]}>
								<Link dark={!renderDarkMode} href="/how-does-it-help">
									How does it help?
								</Link>
								<Link dark={!renderDarkMode} href="/how-does-it-work">
									How does it work?
								</Link>
								<Link dark={!renderDarkMode} href="/#community">
									Community
								</Link>
								<Link dark={!renderDarkMode} href="/#faqs">
									FAQs
								</Link>
								<Link
									dark={!renderDarkMode}
									href="https://github.com/balenalabs/rosetta-at-home"
									external
								>
									Github
								</Link>
							</Txt>
						</Box>
						<Button
							href="/#get-started"
							label="Get Started"
							outline={renderDarkMode}
							style={{ borderColor: '#63ba97' }}
							light={renderDarkMode}
							primary={!renderDarkMode}
						/>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Header;
