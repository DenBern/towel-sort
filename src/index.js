module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    matrix.map((element, index) => {
        if (index % 2 !== 0) {
            element.reverse();
        }
    })
    return matrix.flat();
};
