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
		<GoogleMap defaultZoom={2} defaultCenter={{ lat: 0, lng: 0 }}>
			{props.markers}
		</GoogleMap>
	)),
);

const DeviceMap = () => {
	return (
		<Box style={{ height: `560px`, position: 'relative' }}>
			<CountIndicator count={1874} />
			<MapWithAMarker
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDf0Nr2SdvVanZMKVp-8j0gaoyH0doaTvI&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `560px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				markers={[{ id: 1, lat: 19.076, lng: 72.8777 }].map((device) => {
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
