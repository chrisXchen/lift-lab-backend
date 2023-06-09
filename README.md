# Lift Lab


## Overview

Logging your workouts is easy, but visualizing your progress is demoralizing. It's not linear, some days you feel stronger than others, and some you feel weaker. So where does that leave us? With blind consistency being your only motivator, that is... until Lift Lab arrives.

Lift Lab is a fitness tracker app that helps users track their workout progress, set goals, and achieve results. The app will allow users to create an account, log in, and record their workouts. They can view their progress, set goals, and track their progress towards those goals.


## Data Model

The application will store Users, Workouts, and Goals

* users can have multiple workouts (via references)
* each workout can have multiple goals (by embedding)

An Example User:

```javascript
{
  username: "liftlover",
  hash: // a password hash,
  workouts: // an array of references to Workout documents
}
```

An Example Workout with Embedded Goals:

```javascript
{
  user: // a reference to a User object
  name: "Chest Day",
  goals: [
    { name: "Bench press", sets: "4", reps: "10", weight: "135", completed: true},
    { name: "Incline press", sets: "3", reps: "12", weight: "115", completed: false},
  ],
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](db.mjs)


## Wireframes

/lift/create - page for creating a new workout

![list create](documentation/lift-create.png)

/lift - page for showing all workouts

![list](documentation/lift.png)

/lift/slug - page for showing specific workout

![list](documentation/lift-slug.png)


## [Site map](documentation/site-map.png)


## User Stories or Use Cases

1. As a non-registered user, I can register a new account with the site
2. As a user, I can log in to the site
3. As a user, I can create a new workout
4. As a user, I can view all of the workouts I've created in a single list
5. As a user, I can add goals to an existing workout
6. As a user, I can mark goals as completed in an existing workout
7. As a user, I can view my progress towards my goals


## Research Topics

* (1 point) Fitness Calculator API - An external API from Rapid API to fetch fitness related data
* (1 point) Muscle Group Image Generator API - Another external API from Rapid API to fetch muscle group related images
* (3 points) Unit Testing with Mocha - JavaScript testing framework to write unit tests for the application
* (3 points) Client Side Form Validation - Using a JavaScript library to perform client side form validation on user inputs.

* MAYBE - React


## [Link to Initial Main Project File](app.mjs)


## Annotations / References Used

1. [passport.js authentication docs](http://passportjs.org/docs)
2. [tutorial on react.js](https://react.dev/learn/tutorial-tic-tac-toe)
3. [mocha docs](https://mochajs.org/api/mocha.js.html)
4. [rapid api - external apis](https://rapidapi.com/search/fitness)
