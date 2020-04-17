import React from 'react';
import { ImageForm } from '@bit/sradevski.balena-image-form.image-form';
import { Box } from 'rendition';
import * as BalenaSdk from 'balena-sdk';
import styled from 'styled-components';
import { client } from './useTracker';

const DOWNLOAD_IMAGE_ENDPOINT = `https://api.balena-cloud.com/download`;

const ImageFormContainer = styled(Box)`
	& hr {
		display: none;
	}

	& button {
		margin-left: 0;
		margin-right: auto;
	}
`;

const getReleaseId = (selectedApp: BalenaSdk.Application | undefined) => {
	if (!selectedApp) {
		return;
	}

	switch (selectedApp.slug) {
		case 'balenalabs/rosetta-at-home-amd64':
			return 1344802;
		case 'balenalabs/rosetta-at-home-arm':
			return 1344795;
	}
};

interface DownloadImageProps {
	selectedApp: BalenaSdk.Application | undefined;
	selectedDeviceType: BalenaSdk.DeviceType | undefined;
	sdk: BalenaSdk.BalenaSDK;
}

export const DownloadImage = ({
	selectedApp,
	selectedDeviceType,
	sdk,
}: DownloadImageProps) => {
	const deviceType = {
		...selectedDeviceType,
		options: selectedDeviceType?.options?.filter(
			(option: any) => option.name !== 'advanced',
		),
	};

	const releaseId = getReleaseId(selectedApp);

	return (
		<ImageFormContainer mt={3} width="80%">
			{deviceType && selectedApp && (
				<>
					<ImageForm
						downloadUrl={DOWNLOAD_IMAGE_ENDPOINT}
						appId={selectedApp.id}
						appName={selectedApp?.app_name}
						sdk={sdk}
						rawVersion={'latest'}
						deviceType={deviceType}
						getDownloadSize={() => Promise.resolve('')}
						onDownload={() =>
							client.track('[covid] Download Image', {
								deviceType: (deviceType as BalenaSdk.DeviceType)?.slug,
							})
						}
						setIsDownloadingConfig={() => null}
						// This will result in the .local domain being `foldforcovid.local`
						configurationComponent={
							<>
								<input type="hidden" name="hostname" value="foldforcovid" />
								<input type="hidden" name="releaseId" value={releaseId} />
							</>
						}
					/>
				</>
			)}
		</ImageFormContainer>
	);
};
