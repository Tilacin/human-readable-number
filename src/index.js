module.exports = function toReadable(number) {
    let num1 = Math.floor(number / 10);
    let num2 = number % 10;
    let num3 = Math.floor(number / 100);
    let num4 = Math.floor((number / 10) % 10);
    let result = "";
    let num = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let dozens = {
        0: "",
        1: "",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let teens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    if (number == 0) result = "zero";
    else if (number > 0 && number < 10) {
        result = num[number];
    } else if (number > 9 && number < 20) {
        result = teens[number];
    } else if (number > 19 && number < 100) {
        result = dozens[num1] + " " + num[num2];
    } else if (number > 100 && number < 1000) {
        if (Math.floor((number / 10) % 10) == 1) {
            result = num[num3] + " hundred " + teens[number % 100];
        } else if (Math.floor((number / 10) % 10) == 0) {
            result = num[num3] + " hundred" + dozens[num4] + " " + num[num2];
        } else {
            result = num[num3] + " hundred " + dozens[num4] + " " + num[num2];
        }
    } else if (number == 100) {
        result = "one hundred";
    }
    return result.trim();
};
