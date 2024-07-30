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
		place="bottom"
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

export const TermDataTooltip: React.FC = () => (
	<Tooltip
		id="termdata"
		className="irys-tooltip-styles"
		anchorSelect="#termdata"
		content="Data that is committed to be available for a specific period of time."
		style={tooltipStyles}
	/>
);

export const EpochTooltip: React.FC = () => (
	<Tooltip
		id="epoch"
		className="irys-tooltip-styles"
		anchorSelect="#epoch"
		content="A measurement of time used in blockchains. On Irys, one epoch is approximately one day."
		style={tooltipStyles}
	/>
);

export const VDFTooltip: React.FC = () => (
	<Tooltip
		id="vdf"
		className="irys-tooltip-styles"
		anchorSelect="#vdf"
		content="A Verifiable Delay Function (VDF) requires a specific amount of sequential computational work to evaluate and can be quickly and publicly verified, ensuring fairness and unpredictability in mining."
		style={tooltipStyles}
	/>
);
