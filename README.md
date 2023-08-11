

## Project Documentation

### GitHub Repository
my project has been hosted on GitHub. You can access the repository at the following link:
https://github.com/Vikramjeetblog/DynamicQuestionForm-
### my project also depeloy on vercel . Verecel link is dynamic-question-form.vercel.app
### Setting Up and Running the Project Locally

To run the project locally, follow these steps:

1. Clone the Repository:
   ```
   git clone https://github.com/Vikramjeetblog/DynamicQuestionForm-
   ```

2. Navigate to the Project Directory:
   ```
   cd  DynamicQuestionForm-
   ```

3. Install Dependencies:
   ```
   npm install
   ```

4. Start the Development Server:
   ```
   npm start
   ```

5 last step 
when you write code npm start in terminal it will redirect you to localhost 3000 if dont redirected automaticallty just open broswer chrome or other broswer just write localhost 3000

### Project Structure and Component Explanation

1. **Components**:
   - `Form.js`: This React component manages the logic and rendering of the question form. It uses React state to handle user responses, validation, and navigation through the questions.

2. **Data Loading and Processing**:
   - `data.json`: The JSON file contains the question and option data.
   - Inside `Form.js`, the `data.json` file is imported to populate the questions and options.
   - The `handleOptionSelect` function updates user responses and triggers conditional rendering of follow-up questions using the `followUpQuestions` property.

3. **Styling**:
   - `Form.css`: The CSS file contains styling rules for the form and popup message.
   

### Challenges Faced During Development

1. **Conditional Rendering and Follow-Up Questions**: Implementing the logic to show follow-up questions based on user responses required careful handling of state updates and determining the appropriate question index to display.

2. **Popup Message**: Designing and showing the popup message according to user actions involved managing state changes and CSS styles to ensure it's displayed and hidden as expected.

3. **Styling and Layout**: Achieving the desired layout, such as the card design, spacing between options, and overall styling, required experimenting with CSS and ensuring compatibility across different screen sizes.

Throughout development,my I fouced on UI and implementing all the necessary functionalty and also fouced Ui should be responsive

