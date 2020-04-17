import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';
import { Box } from 'rendition';

import darkDot from '../img/dot-1.svg';
import { CountIndicator } from './CountIndicator';
import BalenaSdk from 'balena-sdk';

const MapWithAMarker = withScriptjs(
	withGoogleMap((props: any) => (
		<GoogleMap
			defaultZoom={2}
			defaultCenter={{ lat: 15, lng: 0 }}
			options={{ streetViewControl: false }}
		>
			{props.markers}
		</GoogleMap>
	)),
);

const DeviceMap = ({
	devices,
}: {
	devices: BalenaSdk.Device[] | undefined;
}) => {
	return (
		<Box height={460} style={{ position: 'relative' }}>
			<CountIndicator count={devices ? devices.length : undefined} />
			<MapWithAMarker
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDf0Nr2SdvVanZMKVp-8j0gaoyH0doaTvI&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<Box height={'100%'} />}
				containerElement={<Box height={460} />}
				mapElement={<Box height={'100%'} />}
				markers={(devices ?? []).map((device) => {
					const { latitude, longitude, id } = device;
					const parsedLatitude = latitude ? parseFloat(latitude) : null;
					const parsedLongitude = longitude ? parseFloat(longitude) : null;
					if (!parsedLatitude || !parsedLongitude) {
						return null;
					}

					return (
						<Marker
							key={id}
							icon={{
								url: darkDot,
							}}
							position={{ lat: parsedLatitude, lng: parsedLongitude }}
						/>
					);
				})}
			/>
		</Box>
	);
};

export default DeviceMap;
