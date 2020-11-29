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
5. Browse to the `build` folder and press the **OK** button.
6. If you cannot see the app's logo in your extensions bar, click the "Extensions" logo (puzzle piece) and make sure to pin the extension called "**Microlearning**".

## How to update the extension

1. Run `npm run build` in your command line.
2. Open **chrome://extensions/** in Google Chrome.
3. Click the reload button in the "**Microlearning 0.0.1**" extension card

## Data Modeling

Our primary goal is to deliver an MVP; henceforward, we decided to change the data structure to locally store the quiz's questions and use Firebase to focus on the user's settings storage. Following is the drawing of the current model. We will update it once we include the saving user's progress functionality.

![Data Modeling](https://user-images.githubusercontent.com/72602527/99968534-89cb9980-2d99-11eb-92df-9ba84a96946c.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
