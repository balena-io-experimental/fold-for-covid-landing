import React from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';
import { Box } from 'rendition';

import balenaLogo from '../img/balena-smaller.svg';
import { CountIndicator } from './CountIndicator';

const MapWithAMarker = withScriptjs(
	withGoogleMap((props: any) => (
		<GoogleMap defaultZoom={2} defaultCenter={{ lat: 20, lng: 0 }}>
			{props.markers}
		</GoogleMap>
	)),
);

const DeviceMap = () => {
	const devices = [{ id: 1, lat: 19.076, lng: 72.8777 }];

	return (
		<Box height={560} style={{ position: 'relative' }}>
			<CountIndicator count={devices.length} />
			<MapWithAMarker
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDf0Nr2SdvVanZMKVp-8j0gaoyH0doaTvI&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<Box height={'100%'} />}
				containerElement={<Box height={560} />}
				mapElement={<Box height={'100%'} />}
				markers={devices.map((device) => {
					const { lat, lng, id } = device;
					return (
						<Marker
							key={id}
							icon={{
								url: balenaLogo,
							}}
							position={{ lat, lng }}
						/>
					);
				})}
			/>
		</Box>
	);
};

export default DeviceMap;
