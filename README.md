# Project: Microlearning for Programming Languages (Group 3)

This repository contains the source code for Group 3 implementation
of the Microlearning App project in the Technical Interaction Design course.

## Authors

* **Anne Schjødt-Pedersen**
* **Beatrice Ambrosi de Magistris Verzier**
* **Cecilia Andersen**
* **Monica Souza**

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

Initially, our data model was defined as a mixture of embedded and normalized structure in two collections. Because a set of answers has information related to a single question, the `questions` collections will have embedded answers containing text and an indication of false or true values for each question. The `users` collection is updated upon every new login in the system, and it will be connected to the questions collections by the `questionID`. The relation between both collections is many-to-many, henceforward the choice for a normalized structure in this part.

<img src="https://user-images.githubusercontent.com/72602527/98544119-ceccd780-2293-11eb-8a8b-5e16c7627192.png" width="90%"></img>

The `counter` field keeps track of how many times the user answered a question correctly. After x times, `learned` will be set to `true`, meaning the user does not need to answer this question anymore.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
