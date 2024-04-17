What We will be building: We will be building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system.

run in development mode: npm run build-dev
run in production mode: npm run build-prod
npm run start
Configs: 
- I have two webpack config files for both development mode(webpack.config.dev.js) and production mode(webpack.config.prod.js )

- I also have a package.json to manage dependencies
- I create file .env for API_KEY and API_ID using for call api aylien_textapi.
Offline Functionality
- The project have service workers set up in webpack to provide the offline functionality of our app.

