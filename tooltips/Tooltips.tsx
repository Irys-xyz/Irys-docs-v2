// Tooltips.tsx
import React from "react";
import { Tooltip } from "react-tooltip";
import { CSSProperties } from "react";

const tooltipStyles: CSSProperties = {
	backgroundColor: "#FF8451",
	color: "#000000",
	maxWidth: "300px", // Set a maximum width to ensure tooltips are responsive
	wordBreak: "break-word", // Ensure long words break and wrap
};

export const EmaTooltip: React.FC = () => (
	<Tooltip
		id="ema"
		className="irys-tooltip-styles"
		anchorSelect="#ema"
		content="A weighted average of past data points where more recent data points are given greater significance."
		style={tooltipStyles}
	/>
);

export const KrydersLawTooltip: React.FC = () => (
	<Tooltip
		id="kryders-law"
		className="irys-tooltip-styles"
		anchorSelect="#kryders-law"
		content="Kryder's Law states that the storage density of hard drives increases exponentially over time, similar to Moore's Law."
		style={tooltipStyles}
	/>
);

export const MooresLawTooltip: React.FC = () => (
	<Tooltip
		id="moores-law"
		className="irys-tooltip-styles"
		anchorSelect="#moores-law"
		content="Moore's Law observes that the number of transistors on a microchip doubles approximately every two years."
		style={tooltipStyles}
	/>
);

export const LedgerTooltip: React.FC = () => (
	<Tooltip
		id="ledger"
		className="irys-tooltip-styles"
		anchorSelect="#ledger"
		content="A digital record of all the data or transactions that have been posted to the network. The ledger is synchronized across the miners in the network to ensure fault-tolerance, immutability, and security."
		style={tooltipStyles}
	/>
);

export const BlocklaneTooltip: React.FC = () => (
	<Tooltip
		id="blocklane"
		className="irys-tooltip-styles"
		anchorSelect="#blocklane"
		content="A portion of a block reserved for a certain type of transaction."
		style={tooltipStyles}
	/>
);
