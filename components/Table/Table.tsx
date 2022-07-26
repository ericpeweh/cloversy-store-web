// Dependencies
import React from "react";

// Styles
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableInnerContainer,
	TableRow
} from "./Table.styles";

function createData(name: string, calories: number, fat: number, carbs: number) {
	return { name, calories, fat, carbs };
}

interface TableProps {
	children: React.ReactElement[];
	headData: string[];
}

const Table = ({ children, headData }: TableProps) => {
	return (
		<TableContainer>
			<TableInnerContainer aria-label="simple table">
				<TableHead>
					<TableRow>
						{headData.map((title, i) => (
							<TableCell align={i === 0 ? "left" : "center"} key={title}>
								{title}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>{children}</TableBody>
			</TableInnerContainer>
		</TableContainer>
	);
};

export default Table;
