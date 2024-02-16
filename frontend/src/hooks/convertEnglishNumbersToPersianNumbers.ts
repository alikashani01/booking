export const useConvertEnglishNumbersToPersianNumbers = (
    value: string | number
): string | number => {
    const persianDigits: { [key: string]: string } = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
    };

    const stringValue = String(value); // تبدیل به رشته

    let result = "";

    for (let index = 0; index < stringValue.length; index++) {
        const character = stringValue[index];

        result += persianDigits[character] || character;
    }

    return result;
};
export const convertEnglishNumbersToPersianNumbers = (
    value: string | number
): string | number => {
    const persianDigits: { [key: string]: string } = {
        "0": "۰",
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
    };

    const stringValue = String(value); // تبدیل به رشته

    let result = "";

    for (let index = 0; index < stringValue.length; index++) {
        const character = stringValue[index];

        result += persianDigits[character] || character;
    }

    return result;
};
