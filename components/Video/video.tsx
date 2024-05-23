import React, { useEffect, useState } from "react";

import YouTube from "react-youtube";

const Video = () => {
	const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	const opts = {
		height: 390 * 1.4,
		width: windowWidth && windowWidth < 1024 ? windowWidth - windowWidth * 0.1 : 640 * 1.4,
	};

	return <YouTube opts={opts} videoId={"8CuS7aJJShU"} className="z-10 overflow-hidden rounded-md" />;
};

export default Video;
