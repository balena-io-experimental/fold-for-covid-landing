import * as React from 'react';
import { createClient, createWebTracker } from 'analytics-client';

export const client = createClient({
	projectName: 'balena-covid',
	endpoint: 'data.balena-cloud.com',
	componentName: 'fold-for-covid',
});

const webTracker = createWebTracker(client);

export const useTrackPageview = () => {
	React.useEffect(() => {
		webTracker.trackPageView('covid');
	}, []);
};
