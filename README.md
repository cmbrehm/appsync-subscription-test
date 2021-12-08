# SubscriptionApp

This is a little companion app to my to-be-published blog in order to test AppSync subscriptions.

You need to update the following section in `src/app/app.module.ts` with the values corresponding to your API

```
  'aws_appsync_graphqlEndpoint': 'https://xxx.appsync-api.us-east-1.amazonaws.com/graphql',
  'aws_appsync_apiKey': 'da2-xxxxxxxxxxxxxxxxxxxxx',
  'aws_appsync_region': 'us-east-1',
``` 

After that
```
npm install
ng serve --open
```

and then you can test mutations and you'll see results.




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
