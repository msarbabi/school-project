export const convertToEnglish = (str) => {
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (var i = 0; i < 10; i++) {
        str = str.replace(persianNumbers[i], i).replace(englishNumbers[i], i);
    }

    return str;
};
