# Gemini Interview Jobcoin App

This app was built to meed the following requirements

Details

Bitcoin is a very difficult protocol to work with, especially for a newcomer to cryptocurrencies, so this challenge is to create an interface for a new, much simpler online currency, the Jobcoin.  Jobcoins have “addresses” that are just arbitrary strings, and there’s no mining or transaction signing - anyone can create Jobcoins out of thin air, or send them to an address.

You can access the Jobcoin management interface and APIs at
https://jobcoin.gemini.com/writing-squirt

There you will create a new Jobcoin address with an amount. Play around with the API interface. Create lots of Jobcoins and send to people (Or random strings ;) !

Once created, your challenge will be to make a 2 page website that allows users to send Jobcoins and check the balance. Ensure that your endpoints include a send to https urls. 

Requirements
1. Create 2 screens
    * Sign in page (using any created address from the management tool)
    * Send page, sending to any address (any string of text)
2. Track the balance of a Jobcoin address
3. Ability to send Jobcoin to an address and track those transactions and the resulting balance
4. Display transaction history visually (chart, line graph etc)

High res UX screens 
https://www.dropbox.com/sh/pa9zzvziwxk9ldy/AAC1ODEdsE-z_2FCMkE70_m2a?dl=0

Screen 1
1. UI Elements
    * Sign in widget
2. Assumptions
    * No user/pass needed.  You ‘sign in’ by typing in an address created in the management tool and submitting.

Screen 2
1. UI Elements
    * Balance of the entered jobcoin address
    * Send widget
    * Data vis (graph)
    * Sign out (back to the home/previous screen)
2. Assumptions
    * User can send to any address (any string of text)
    * This will be tracked via the graph and balance

Again, we just want to get a sense for how you write code and solve problems. This is not meant to win any design awards.  Please use any framework, libraries, or tools that you think are appropriate to solve the problem.  And don’t hesitate to ask any questions. Expect this to take 3-5 hours to complete.

The graph is meant to show the account balance over time however you’d like.  Make sure it updates when a new transaction is made.

Lastly, the wires are a guideline. Feel free to change the layout and add some style as you see fit. Just make sure all the elements are present in the final product.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
