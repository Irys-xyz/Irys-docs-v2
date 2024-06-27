import React, { useEffect, useState, useRef } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

const ProgrammableDataAnimation: React.FC = () => {
	const sourceW = 850;
	const sourceH = 300;
	const [responsiveW, setResponsiveW] = useState<number>(sourceW);
	const [responsiveH, setResponsiveH] = useState<number>(sourceH);
	const riveParentRef = useRef<HTMLDivElement>(null); // Reference to the container div

	const { RiveComponent } = useRive({
		src: "/programmable-data/programmable-data.riv",
		autoplay: true,
		stateMachines: "Programmable Data",
		layout: new Layout({
			fit: Fit.Fill,
			alignment: Alignment.Center,
		}),
	});

	useEffect(() => {
		const handleResize = () => {
			if (riveParentRef.current) {
				const newWidth = riveParentRef.current.offsetWidth; // Get the current width of the div
				const newHeight = (newWidth * sourceH) / sourceW; // Calculate the height maintaining the aspect ratio
				setResponsiveW(newWidth);
				setResponsiveH(newHeight);
			}
		};

		// Initial resize to fit parent on mount
		handleResize();

		// Set up the resize observer
		const resizeObserver = new ResizeObserver(handleResize);
		if (riveParentRef.current) {
			resizeObserver.observe(riveParentRef.current);
		}

		// Cleanup
		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={riveParentRef}
			className={`flex justify-center items-center w-full h-auto`}
			style={{ height: `${responsiveH}px` }}
		>
			<RiveComponent />
		</div>
	);
};

export default ProgrammableDataAnimation;
