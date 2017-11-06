# Northcoders News API
Northcoders News API is a RESTful api, the back end to Northcoders news.
This repositoy contains the code for the api. The code for the front end can be found [here](https://github.com/Taughran23/northcodersNews).


## Running Locally
If you would like to run the project locally this project uses Node v7.9.0 To check you have this installed, enter the following command into your terminal:

node -v

If you do not have the correct version of node you can get the latest version from [here](https://nodejs.org/en/download/).

Follow the steps below to get set up with the project on your local machine.

git clone https://github.com/Taughran23/northcodersNewsAPI.git

cd northcodersNewsAPI

npm install

Once all dependencies have been installed, open a second shell in your terminal. In this run mongodb by entering the following command:

mongod

Now you can run the tests in your original shell by entering:

npm test

## Built With
* MongoDB
* Mongoose
* Express

# Routes
 | Route |   |
| ------|---|
| `GET /api/topics` | Get all the topics |
| `GET /api/topics/:topic_id/articles` | Return all the articles for a certain topic |
| `GET /api/articles` | Returns all the articles |
| `GET /api/articles/:article_id/comments` | Get all the comments for a individual article |
| `POST /api/articles/:article_id/comments` | Add a new comment to an article. This route requires a JSON body with a comment key and value pair e.g: {"comment": "This is my new comment"} |
| `PUT /api/articles/:article_id` | Increment or Decrement the votes of an article by one. This route requires a vote query of 'up' or 'down' e.g: /api/articles/:article_id?vote=up |
| `PUT /api/comments/:comment_id` | Increment or Decrement the votes of a comment by one. This route requires a vote query of 'up' or 'down' e.g: /api/comments/:comment_id?vote=down |
| `DELETE /api/comments/:comment_id` | Deletes a comment |
| `GET /api/users/:username` | Returns a JSON object with the profile data for the specified user. |
