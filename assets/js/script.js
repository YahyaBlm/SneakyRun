function uniq(arr) {
    return arr.reduce((acc, n, i) => {
        if (i === 0 || n !== arr[i - 1]) {
            return [...acc, n];
        }
        return acc;
    }, []);
}