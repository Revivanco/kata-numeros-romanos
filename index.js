const romanNumbers = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
];
const mergeStrings = (string1, string2) => `${string1}${string2}`

const romanMachine = (number) => {
    let romanResult = ""
    for (let i = 0; i < romanNumbers.length; i++) {
        const romanArray = romanNumbers[i]
        console.log(romanArray)
        if (number >= romanArray[0]) {
            let index1 = romanArray[1]
            romanResult = mergeStrings(index1, romanResult)

        }
    };

    return romanResult

};


romanMachine(31)
console.log(romanMachine(31))

