# Project: Microlearning for Programming Languages (Group 3)

This repository contains the source code for Group 3 implementation
of the Microlearning App project in the Technical Interaction Design course.

## Authors

- **Anne Schjødt-Pedersen**
- **Beatrice Ambrosi de Magistris Verzier**
- **Cecilia Andersen**
- **Monica Souza**

## How to set up the project as an extension

1. Run `npm run build` in your command line.
2. Open **chrome://extensions/** in Google Chrome.
3. On that page, make sure 'Developer mode' (in the top right corner) is enabled.
4. Click "**Load unpacked**".
5. Browse to the `build` folder, select it and press the **OK** button.
6. If you cannot see the app's logo in your extensions bar, click the "Extensions" logo (puzzle piece) and make sure to pin the extension called "**Practice.now()**".

**NB**: Sometimes the login prompt does not open in the foreground on Mac OS. If you've clicked the extension and see the message "Please log in." without seeing an option to sign in, check all open Chrome windows.

## How to update the extension

1. Run `npm run build` in your command line.
2. Open **chrome://extensions/** in Google Chrome.
3. Click the reload button in the "**Practice.now() 0.0.1**" extension card

## Data Modelling

Our primary goal is to deliver an MVP; henceforward, we decided to change the data structure to locally store the quiz's questions and use Firebase to focus on the user's progress and settings storage. Following is the drawing of the current model.

![data-model](https://user-images.githubusercontent.com/72602527/102727433-e8971b00-4325-11eb-9442-13354a2b6aca.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
