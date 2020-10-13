
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (Array.isArray(matrix)) {
        matrix.map((it, i) => {
            !(i % 2 == 0) ? it.reverse() : ''
        })
        return matrix.flat(Infinity);
    } else {
        return [];
    }
}
