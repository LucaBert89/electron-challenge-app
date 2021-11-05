export const mostRepeated = (countArray) => {
    const values = Object.values(countArray);
    const max = Math.max(...values);

    const findValue = Object.entries(countArray).filter(([key, value]) => value === max)
    return findValue.join().replace(",", ":")
}

  