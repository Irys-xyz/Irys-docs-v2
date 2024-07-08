import React, { useEffect, useRef, useState } from "react";
import { useRive, Fit, Alignment, Layout } from "@rive-app/react-canvas";

interface SimpleRiveViewerProps {
	src: string;
	width: number;
	height: number;
	stateMachine?: string;
}

const SimpleRiveViewer: React.FC<SimpleRiveViewerProps> = ({ src, width, height, stateMachine }) => {
	const { rive, RiveComponent } = useRive({
		src,
		autoplay: true,
		stateMachines: stateMachine,
		layout: new Layout({
			fit: Fit.Fill,
			alignment: Alignment.Center,
		}),
	});

	const containerRef = useRef<HTMLDivElement>(null);
	const [componentDimensions, setComponentDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			if (containerRef.current) {
				const { clientWidth, clientHeight } = containerRef.current;
				const aspectRatio = width / height;

				let newWidth = clientWidth;
				let newHeight = clientWidth / aspectRatio;

				if (newHeight > clientHeight) {
					newHeight = clientHeight;
					newWidth = clientHeight * aspectRatio;
				}

				setComponentDimensions({ width: newWidth, height: newHeight });
			}
		};

		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return () => window.removeEventListener("resize", updateDimensions);
	}, [width, height]);

	return (
		<div className="flex flex-col ">
			<div
				ref={containerRef}
				className="w-full flex justify-center"
				style={{ height: "auto", minHeight: `${height}px`, position: "relative" }}
			>
				{RiveComponent && (
					<RiveComponent
						style={{
							width: `${componentDimensions.width}px`,
							height: `${componentDimensions.height}px`,
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default SimpleRiveViewer;
