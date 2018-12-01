let i;

function getSpiralData (row, column, array) {
	while((sRow < row) && (sColumn < column)) {
		// Print the top Row
		for(i = sColumn;i < column;i +=1) {
			newArray.push(array[sRow][i]);
		}
		sRow += 1;

		// Print last Column
		for(i = sRow;i < row;i +=1) {
			newArray.push(array[i][column - 1 ]);
		}
		column -= 1;
		 
		// Print last row
		if(sRow < row) {
			for(i = column - 1;i >= sColumn;i -=1) {
					newArray.push(array[row-1][i]);
			}
		}
		row -=1;

		// Print first row
		if(sColumn < column) {
				for(i = row-1;i >= sRow;i -=1) {
						newArray.push(array[i][sColumn]);
				}
		}
		sColumn += 1;
	}
    return newArray;
}

export default getSpiralData;

