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
const mergeStrings = (string1, string2) => `${string2}${string1}`

const findRomanNumber = (number) => {
    for (let i = 0; i < romanNumbers.length; i++) {
        const romanArray = romanNumbers[i]
        if (number >= romanArray[0]) {
            return romanArray
        }
    }
}

const romanMachine = (number) => {
    let romanResult = ""
    while (number > 0) {
        let resultNumber = findRomanNumber(number)
        number -= resultNumber[0]
        romanResult = mergeStrings(resultNumber[1], romanResult)
    }

    return romanResult

};

romanMachine(4250)
console.log(romanMachine(4250))

