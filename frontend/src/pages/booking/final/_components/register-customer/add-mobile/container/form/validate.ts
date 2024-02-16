const validate = (value: string): string | null => {
    if (value && value.length < 11) {
        return "Error: Value is too short";
    } else {
        return null;
    }
};
export default validate;
