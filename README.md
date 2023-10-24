# calculator

**Simple Calculator with Memory Functions**

This is a simple web-based calculator with additional memory functions, designed for basic arithmetic operations. The calculator includes a user interface with a switch to turn it on or off and a screen to display input and results. Here's a description of the key features and functionalities:

**Calculator Functions:**
1. **Value on Screen**: When the switch is turned on, you can input numbers and arithmetic operators by clicking on the buttons with the corresponding values. The `valueOnScreen(parameter)` function is responsible for displaying these values on the screen.

2. **Equals (=)**: Clicking the '=' button performs the calculation and displays the result on the screen. It uses the JavaScript `eval()` function to evaluate the expression in the input field.

3. **Memory Functions**:
   - **Memory Plus (m+)**: Clicking the 'm+' button adds the current input value to memory.
   - **Memory Remember (rm)**: Clicking the 'rm' button retrieves the value stored in memory and displays it on the screen.
   - **Memory Minus (m-)**: Clicking the 'm-' button removes the last stored value from memory.

4. **Clear All (ca)**: Clicking the 'ca' button clears the input field and memory, resetting the calculator.

5. **Delete (⌫)**: Clicking the '⌫' button deletes the last character from the input field.

**Calculator Display:**
- The calculator display is located in the "myInput" input field. It shows the current input, intermediate results, and final results.

**Calculator Styling:**
- The calculator has a user-friendly interface with a dark mode that can be toggled using the switch.
- The calculator includes buttons for numbers, arithmetic operations, memory functions, and other actions, making it easy to interact with.

**Switch (OFF / ON):**
- The switch located at the top of the calculator allows you to turn the calculator on or off. When turned off, you cannot use the calculator for calculations.

**Solar Panel Animation:**
- The calculator includes a decorative solar panel animation for visual appeal.

**FontAwesome Icons:**
- FontAwesome icons are used for the calculator buttons, enhancing the user experience.

**Usage:**
1. Click the switch to turn on the calculator.
2. Input numbers and perform arithmetic operations using the calculator buttons.
3. Use memory functions to store, recall, and clear values.
4. Click the '=' button to calculate the result.
5. Toggle dark mode using the switch.

**Note:**
- The calculator uses JavaScript's `eval()` function for calculations, which is simple but may have limitations or security implications in a production environment. It is recommended to use a more secure and robust approach for calculations in real applications.

This calculator is designed for basic arithmetic and memory functions and serves as a simple example of a web-based calculator with a user interface. Additional features and enhancements can be added to meet specific requirements.
