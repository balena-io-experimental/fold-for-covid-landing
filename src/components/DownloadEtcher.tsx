import React, { useState, useEffect } from 'react';
import { DropDownButton, Txt, Divider, Box, Link } from 'rendition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import get from 'lodash-es/get';
import replace from 'lodash-es/replace';
import sortBy from 'lodash-es/sortBy';
import styled from 'styled-components';
import Sniffr from 'sniffr';
import arch from 'arch';
import { client } from './useTracker';

const MenuItem = styled.div`
	padding: 4px 16px;
	&:hover {
		background-color: '#fff' !important;
	}
	> a {
		padding: 4px;
		display: block;
	}
`;

const metadataUrl =
	'https://raw.githubusercontent.com/balena-io/etcher/gh-pages/scrutinizer.json';
const fallbackReleaseVersion = 'v1.5.45';

export const constructEtcherReleases = (version: string) => {
	const unprefixedVersion = replace(version, 'v', '');
	return [
		{
			text: 'Etcher for Windows (x86|x64) (Installer)',
			href: `https://github.com/balena-io/etcher/releases/download/v${unprefixedVersion}/balenaEtcher-Setup-${unprefixedVersion}.exe`,
			os: 'Windows',
			arch: 'x86|x64',
			installerType: '(Installer)',
		},
		{
			text: 'Etcher for Windows (x86|x64) (Portable)',
			href: `https://github.com/balena-io/etcher/releases/download/v${unprefixedVersion}/balenaEtcher-Portable-${unprefixedVersion}.exe`,
			os: 'Windows',
			arch: 'x86|x64',
			installerType: '(Portable)',
		},
		{
			text: 'Etcher for macOS',
			href: `https://github.com/balena-io/etcher/releases/download/v${unprefixedVersion}/balenaEtcher-${unprefixedVersion}.dmg`,
			os: 'macOS',
			arch: 'x64',
		},
		{
			text: 'Etcher for Linux x64 (64-bit) (AppImage)',
			href: `https://github.com/balena-io/etcher/releases/download/v${unprefixedVersion}/balena-etcher-electron-${unprefixedVersion}-linux-x64.zip`,
			os: 'Linux',
			arch: 'x64',
			installerType: '(AppImage)',
		},
		{
			text: 'Etcher for Linux x86 (32-bit) (AppImage)',
			href: `https://github.com/balena-io/etcher/releases/download/v${unprefixedVersion}/balena-etcher-electron-${unprefixedVersion}-linux-ia32.zip`,
			os: 'Linux',
			arch: 'x86',
			installerType: '(AppImage)',
		},
	];
};

interface Link {
	text: string;
	href: string;
	os: string;
	arch: string;
	installerType?: string;
}

export const DownloadEtcher = () => {
	const [releaseVersion, setReleaseVersion] = useState(fallbackReleaseVersion);
	const [fetchingRelease, setFetchingRelease] = useState(true);
	const [initialized, setInitialized] = useState(true);
	const [link, setLink] = useState<Link | null>(null);
	const [links, setLinks] = useState<Link[]>([]);
	const releases = React.useMemo(
		() => constructEtcherReleases(releaseVersion),
		[releaseVersion],
	);

	useEffect(() => {
		try {
			const userClient = new Sniffr() as any;

			userClient.sniff(window.navigator.userAgent);
			userClient.os.arch = arch() as any;

			const score = (condition: any, p: number) => (!condition ? p : 0);

			const sortedLinks = sortBy(releases, (l) => {
				let linkScore = score(
					l.os.toLowerCase() === userClient.os.name.toLowerCase(),
					2,
				);
				if (linkScore === 0) {
					const archRegex = new RegExp(userClient.os.arch, 'i');
					const isSameArch = archRegex.test(l.arch);
					linkScore = linkScore + score(isSameArch, 1);
				}

				return linkScore;
			});
			setLink(sortedLinks[0]);
			setLinks(sortedLinks.splice(1));
			setInitialized(true);
		} catch (e) {
			// For whatever reason detection fails, fallback to the first option
			console.log(e);
			setInitialized(true);
		}
	}, [releases]);

	useEffect(() => {
		fetch(metadataUrl)
			.then((res) => res.json())
			.then((data) =>
				get(data, 'latestRelease.tagName', fallbackReleaseVersion),
			)
			.catch((err) => {
				console.log(
					'Could not fetch latest release, falling back to the preloaded one',
					err,
				);
				return fallbackReleaseVersion;
			})
			.then((version) => {
				setReleaseVersion(version);
				setFetchingRelease(false);
			});
	}, []);

	const handleDownload = () => {
		if (!initialized || !link) {
			return;
		}

		client.track('[covid] Download Etcher');

		window.location.replace(link?.href);
	};

	const linksArray = [link].concat(links);

	/* tslint:disable */
	const linksWithDividers: any = linksArray.reduce(
		(linksAcc: any, current: any, index: number) => {
			linksAcc.push(current);
			if (
				index !== linksArray.length - 1 &&
				current.os !== linksArray[index + 1]?.os
			) {
				linksAcc.push({ isDivider: true });
			}
			return linksAcc;
		},
		[],
	);
	/* tslint:enable */

	const linkLabel = initialized ? (
		<Txt.span>{`Download ${link?.text
			.split(' ')
			.slice(1, 4)
			.join(' ')}`}</Txt.span>
	) : (
		<>
			<Txt.span mr={2}>Detecting OS</Txt.span>{' '}
			<FontAwesomeIcon icon={faCog} className="fa-spin" size="xs" />
		</>
	);

	return (
		<DropDownButton
			mt={3}
			onClick={handleDownload}
			primary
			noListFormat
			label={<div>{linkLabel}</div>}
		>
			{!fetchingRelease && initialized && (
				<Box p={2}>
					{linksWithDividers.map((l: any, index: any) => {
						if (l?.isDivider) {
							return <Divider />;
						}
						return (
							<MenuItem>
								<Link blank key={index} href={l.href} color="#2a506f">
									{l.text}
								</Link>
							</MenuItem>
						);
					})}
				</Box>
			)}
		</DropDownButton>
	);
};
