### React - Node proxy template

This project is a template for a React project that is used via a Node proxy.  
[This article](https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3) was used as a starting point.

#### Issue that this approach solves

Secrets (like 3rd party API keys) stored in environment variables in a React app [are actually not so secret](https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5).

**Solution**: Only use the secrets within the Node proxy.

**How to test**:

- Add a `.env` file in the project root.
- Write the following line in this file: `MY_SECRET_IS='safe'`
- Next time the 'Find secret' button is pressed, the displayed text should be... secret :).

#### Drawback

Node (express) => more than just static content => cannot be deployed on e.g. Netlify.

#### Bonus

Since the (debatable :) ) best deployment solution is Heroku... and since Heroky apps fall asleep after 30 minutes of inactivity...

**The Pinger** is a dummy React Component loaded the first time the app is rendered. It pings the node server once every 20 minutes, between 7AM and 10PM.
