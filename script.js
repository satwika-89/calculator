// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display'); // Get the display input element
    const buttons = document.querySelectorAll('button'); // Get all button elements
    let displayValue = ''; // Variable to store the current value to be displayed

    // Add event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const { innerText: value } = button; // Get the inner text of the button clicked

            // Perform action based on the button value
            switch (value) {
                case 'AC':
                    displayValue = ''; // Clear the display
                    break;
                case 'del':
                    displayValue = displayValue.slice(0, -1); // Delete the last character
                    break;
                case '=':
                    try {
                        displayValue = eval(displayValue); // Evaluate the expression
                    } catch {
                        displayValue = 'Error'; // Display error if the expression is invalid
                    }
                    break;
                default:
                    displayValue += value; // Add the button value to the display value
            }

            display.value = displayValue; // Update the display
        });
    });
});
