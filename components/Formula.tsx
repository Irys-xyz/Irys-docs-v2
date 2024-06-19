import React from "react";
import Latex from "react-latex-next";

interface FormulaProps {
	latexString: string;
}

const Formula: React.FC<FormulaProps> = ({ latexString }) => {
	return <Latex>{latexString}</Latex>;
};

export default Formula;
