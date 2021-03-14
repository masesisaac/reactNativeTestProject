# React Native Take Home Test Instructions

At Simple Habit, one of our core values is to "Move Fast."  However, moving fast does not refer to our engineering velocity but instead how quickly we can achieve our whole team's goals (product managers, designers, engineer, etc.).  As engineers we empower our non-engineering team members to be able to run tests, validate features, and update content without having to wait for engineering releases.

In this spirit, we would like you to build a system for our content team to test different product "flows" without a separate deployment of the client app.  Specifically, in this case your system will render an introductory “lesson” which is used in our sleep therapy app.

## What to Build:
* You should create a react native app, which after clicking a button, renders the flow defined in `flows/1_lesson_introduction.json`.  The screens should be presented in the same order as the array.  Upon completion user's should be left on our home screen.  Clicking the button again will restart the flow.
* We are most interested in your technical design for this project (feel free to build a mocked-up wireframe as long as all of the fields and buttons are visible on your screen).  However, we have included a [design spec](https://www.figma.com/file/EogHwsKaSz48dBhANAhA2V/Engineering-Take-Home-Specification?node-id=0%3A1) to build against if that helps you get started.

As you build, you should keep these in mind:
* We are a startup - the decision on whether a problem warrants outsourcing to a framework or should be controlled in our own code is up to you.
* Extensibility - Currently the flow you are supporting has very few models and minimal logical requirements.  However, your solution should be built assuming future enhancements.
* Time Constraints - We understand this is a take home test and that more work can always be done.  You should document any architecture compromises or code changes which you would prioritize if you had more time.

## Requirements
Plan to spend no more than 3 hrs of effort on the required steps. The **deliverables** for the project should include:

* The code you have written.  
* Instructions to run your app (if you've haven't used the template project).
* An optional document describing what your next steps would be if you had more time to work on the problem.

## Potential Enhancements
As time allows, you can consider tackling any of the following issues.  However, even if you do not code them, your technical design should lend itself to enhancements such as these.  Designs for these are again listed on [figma](https://www.figma.com/file/EogHwsKaSz48dBhANAhA2V/Engineering-Take-Home-Specification?node-id=0%3A1).

* As our lessons get longer, users are wanting to see content on previous screens.  Add support for backwards navigation.  Your solution should work on Android and iOS devices.
* Our content team wants to be able to further control the visual layout of the text.  Add support for the `textScreens` described in `2_lesson_introduction_contentful.json`.  See Contentful's rich text component for help parsing the richText documents.
* Sometimes we wish to let our users communicate with their sleep coach through their lessons in addition to in-app chat.  Add support for `journalScreen` described in `2_lesson_introduction_contentful.json`.
* We'd like our lessons to feel more personalized.  Add the ability to include strings that users have previously input (say on a journal or similar screen) as part of the text of your screen.

## Getting Started
* We've included a starter project which also houses the JSON you'll use to build your flow.  Feel free to use your own boilerplate as well.

To set up our template you can run

```sh
gem install bundler
bundle install
brew bundle
```


Please reach out to us at Simple Habit if you have any questions or run into difficulties.