import React, { useRef, useEffect } from 'react';

export const LazyImage = (props: { src: string; alt: string }) => {
	const imageRef: any = useRef();
	const observerRef: any = useRef();
	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const { isIntersecting } = entry;

					if (isIntersecting) {
						imageRef.current.src = props.src;
						observerRef.current = observerRef.current.disconnect();
					}
				});
			},
			{
				root: document.body,
				rootMargin: '0px 0px 300px 0px',
			},
		);

		observerRef.current.observe(imageRef.current);

		return () => observerRef.current.disconnect();
	}, [props.src]);

	return <img style={{ width: '100%' }} ref={imageRef} alt={props.alt} />;
};
