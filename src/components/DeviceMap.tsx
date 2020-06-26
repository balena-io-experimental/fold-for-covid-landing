import React from 'react';
import { Box, Map } from 'rendition';

import darkPin from '../img/pin.svg';
import { CountIndicator } from './CountIndicator';
import BalenaSdk from 'balena-sdk';

const DeviceMap = ({
	devices,
}: {
	devices: BalenaSdk.Device[] | undefined;
}) => {
	return (
		<Box height={460} style={{ position: 'relative' }} bg="lightgray">
			<CountIndicator count={devices ? devices.length : undefined} />
			{devices && (
				<Map
					apiKey="AIzaSyDf0Nr2SdvVanZMKVp-8j0gaoyH0doaTvI"
					data={devices}
					dataMap={{
						id: () => Math.random(),
						title: 'device_name',
						lat: (d) => (d.latitude ? parseFloat(d.latitude) : undefined),
						lng: (d) => (d.longitude ? parseFloat(d.longitude) : undefined),
					}}
					getIcon={() => darkPin}
				/>
			)}
			{!devices && <Box height={'100%'} />}
		</Box>
	);
};

export default DeviceMap;
