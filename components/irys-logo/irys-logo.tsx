import React, { useState, useEffect, useRef } from "react";

/**
 * Interactive Irys Eye
 * @description An interactive eye that follows the mouse cursor
 * @returns {JSX.Element}
 */
const IrysInteractiveEye = () => {
  const containerRef = useRef(null);
  const [circlePosition, setCirclePosition] = useState({
    left: "50%",
    top: "50%",
  });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const container = containerRef.current;
      if (!container) return;

      const { left, top, width, height } = (
        container as any
      )?.getBoundingClientRect();
      const circleSize = Math.min(width, height) * 0.1; // Example size: 10% of the smallest dimension

      // Mouse position relative to the viewport
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate the position within the container
      const offsetX = mouseX - left;
      const offsetY = mouseY - top;

      // Adjust the circle's movement constraints
      const maxMovement = Math.min(width, height) * 0.15; // 15% of the smallest dimension
      const initialX = width / 2;
      const initialY = height / 2;

      const deltaX = offsetX - initialX;
      const deltaY = offsetY - initialY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const constrainedDistance = Math.min(distance, maxMovement);
      const constrainedX = (deltaX / distance) * constrainedDistance;
      const constrainedY = (deltaY / distance) * constrainedDistance;

      // Set the new position ensuring the circle stays within bounds
      setCirclePosition({
        left: `${Math.max(
          0,
          Math.min(width - circleSize, initialX + constrainedX - circleSize / 2)
        )}px`,
        top: `${Math.max(
          0,
          Math.min(
            height - circleSize,
            initialY + constrainedY - circleSize / 2
          )
        )}px`,
      });
    };

    // Add the event listener to the entire window
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative w-[48px] h-[59px] text-black dark:text-white"
      ref={containerRef}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 198 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M197.998 98.9991H169.713C169.713 60.0076 137.991 28.2854 98.9991 28.2854C60.0076 28.2854 28.2854 60.0076 28.2854 98.9991H0C0 44.4081 44.4081 0 98.9991 0C153.59 0 197.998 44.4081 197.998 98.9991Z"
          fill="currentColor"
        />
      </svg>
      <div
        className={[
          "dark:bg-white bg-black rounded-full absolute",
          "blinking",
        ].join(" ")}
        style={{
          width: `${10}px`,
          height: `${10}px`,
          left: circlePosition.left,
          top: circlePosition.top,
        }}
      ></div>
    </div>
  );
};

export default IrysInteractiveEye;
