exports.min = function min(array = []) {
    const reducer = (accumulator, currentValue) =>
        accumulator < currentValue ? accumulator : currentValue;
    return array.length > 0 ? array.reduce(reducer) : 0;
};

exports.max = function max(array = []) {
    const reducer = (accumulator, currentValue) =>
        accumulator > currentValue ? accumulator : currentValue;
    return array.length > 0 ? array.reduce(reducer) : 0;
};

exports.avg = function avg(array = []) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.length > 0 ? array.reduce(reducer) / array.length : 0;
};
