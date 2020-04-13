import React from 'react';
import { ImageForm } from '@bit/sradevski.balena-image-form.image-form';
import { Box } from 'rendition';
import * as BalenaSdk from 'balena-sdk';

const DOWNLOAD_IMAGE_ENDPOINT = `https://api.balena-cloud.com/download`;

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

	return (
		<Box mt={3} width="50%">
			{deviceType && selectedApp && (
				<ImageForm
					downloadUrl={DOWNLOAD_IMAGE_ENDPOINT}
					appId={selectedApp.id}
					appName={selectedApp?.app_name}
					sdk={sdk}
					rawVersion={'latest'}
					deviceType={deviceType}
					getDownloadSize={() => Promise.resolve('')}
					onDownload={() => null}
					setIsDownloadingConfig={() => null}
					configurationComponent={<></>}
				/>
			)}
		</Box>
	);
};
