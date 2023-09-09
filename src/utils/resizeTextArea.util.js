import textareaSizes from "../constants/textarea.constant";

const getNewTextareaSize = (textareaSize, newText) => {
    const currentAnswerAreaSize = textareaSize.rows * textareaSize.columns;
    const textLength = newText.length;    
    
    if (currentAnswerAreaSize > textLength) {
        return textareaSize;
    }

    const newColumnNumber = textLength / textareaSize.rows;
    const newRowNumber = textLength / textareaSizes.MAX_COLUMN_NUMBER;

    return newColumnNumber > textareaSizes.MAX_COLUMN_NUMBER
        ? { rows: newRowNumber, columns: textareaSizes.MAX_COLUMN_NUMBER }
        : { rows: textareaSize.rows, columns: newColumnNumber };
};

export default getNewTextareaSize;