# Whack a Button 2.0
A game in which you need to search for the yellow circle and try to click on it, in order to win.

This game is a continued version of the game "Whack-a-Button".

## Setup
To use this project, you'll need to create an account at [GIPHY Developers](https://developers.giphy.com/), as the project pulls the gifs from their API.

After creating an account, navigate to the [GIPHY Developers Dashboard](https://developers.giphy.com/dashboard/). If you haven't created an app yet, go to the top navigation and click on <strong>Create an App</strong> located between <strong>Blog</strong> and your <strong>profile name</strong>.

When creating the app, make sure to select API, give your app a name and a small description of what you will use it for. Check the checkbox to confirm that you have read and agree to the GIPHY API Terms, and then click on <strong>Create App</strong>.

Once your app is created, you'll see an API Key. Copy it, go to the project, and create a new file called <strong>apikey.js</strong>. In that file, write the following code and paste your API key:

```javascript
const API_KEY = "YOUR_API_KEY";
```

Finally, save the file, and you're ready to go!
