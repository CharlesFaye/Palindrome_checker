const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
checkBtn.addEventListener('click', showResult);


/**
 * Checks if the input text is a palindrome and displays the result.
 * 
 * This function retrieves the value from a text input field, removes all non-alphanumeric characters,
 * converts it to lowercase, and checks if it is a palindrome. It then displays the result in a 
 * designated result element. If the input is empty, it alerts the user to input a value.
 * 
 * @function
 */
function showResult() {
    const retrievedTextInput = textInput.value;
    const regex = /[^a-zA-Z0-9]+/g
    const cleanedText = retrievedTextInput.replace(regex, "").toLowerCase();
    if(cleanedText === "") {
        alert('Please input a value');
        return
        }

    if(cleanedText.length === 1) {
        result.textContent =  `${retrievedTextInput} is a palindrome`;
        textInput.value = ""
    }
        else {
            if(cleanedText !== cleanedText.split('').reverse().join('')) {
            result.textContent = `${retrievedTextInput} is not a palindrome`;
            textInput.value = ""
            }else {
               result.textContent =  `${retrievedTextInput} is a palindrome`;
               textInput.value = ""
            }
        }
    
}

/**
 * A reference to the DOM element with the class 'currentYear'.
 * This element is expected to display or use the current year.
 * @type {Element}
 */
const currentYear = document.querySelector('.currentYear');
const currentDate = new Date();
const getCurrentYear = currentDate.getFullYear();
currentYear.textContent = getCurrentYear;

