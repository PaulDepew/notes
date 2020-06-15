# Lab 01

# NOTESY APP

### Author: Paul Depew

- [submission PR](https://github.com/PaulDepew/notes/pull/1)
- [tests report](n/a)
- [front-end](n/a)

### Setup

Clone the Git repository
Install Dependencies
Run npm

#### `.env` requirements

- MONGO_ATLAS_URI= mongodb+srv://pauld:Djsfpe616@cluster0-ydvvi.mongodb.net/notesy?retryWrites=true&w=majority

#### Running the app

- open your terminal and run 
```npm index.js <action> <message> <category>```
  Actions - --add(-a), --find(-f), --delete(-d)
  Message - A message you would like to save
  Category - A category to 


#### Tests

npm test
  - runs all associated tests

First test: Tests to see that the input can recieve an input
Second test: Checks to see that an input can create a note
Third test: Checks to see if the note can be added to MongoDB

#### UML

![UML Diagram](https://imgur.com/a/HGUnTtb)
