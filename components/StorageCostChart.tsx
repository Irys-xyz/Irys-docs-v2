import React from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StorageCostChart: React.FC = () => {
	const labels = Array.from({ length: 201 }, (_, i) => i); // n values from 0 to 200
	const decayRate1 = 0.01;
	const decayRate28 = 0.28;
	const C0 = 100;

	const calculateCost = (decayRate: number, year: number) => {
		return C0 *  Math.pow(1 - decayRate, year);
	};

	const data1 = labels.map((n) => calculateCost(decayRate1, n));
	const data28 = labels.map((n) => calculateCost(decayRate28, n));

	const chartData = {
		labels,
		datasets: [
			{
				label: "1% Annualized Decline",
				data: data1,
				borderColor: "#FF8451",
				backgroundColor: "rgba(255,132,81,0.2)",
				fill: true,
			},
			{
				label: "28% Annualized Decline",
				data: data28,
				borderColor: "#FFC46C",
				backgroundColor: "rgba(255,196,108,0.2)",
				fill: true,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
			},
			title: {
				display: true,
				text: "Declines in the Cost of Storage",
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
				ticks: {
					stepSize: 20,
				},
				title: {
					display: true,
					text: "% of first year cost",
				},
			},
			x: {
				min: 0,
				max: 200,
				ticks: {
					stepSize: 50,
				},
				title: {
					display: true,
					text: "Years",
				},
			},
		},
	};

	return <Line data={chartData} options={options} />;
};

export default StorageCostChart;
