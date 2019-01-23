# MutatedObject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instructions for use

Run the project using ng serve.

Once it is running open up the browser debugger and go to the console view.

## Default Change Detection
Click the "Trigger change detection" button and observe the output in the debugger window, also that "top" has changed to "bottom"

You have just witnessed Angulars default change detection in action. Note that in the code we just set the property's value to a new string, Angular detected the change and updated the view for us.

## OnPush Change Detection

Firstly we need to go into the "tool-tip.component" and uncomment the "changeDetection" attribute in the "@Component" decorator, go back to browser, ( make sure you can see the console window in the dev tools ) click the "Trigger change detection" button again and note what happens... :)

So, what did happen, hopefully nothing changed, simply put Angular is no longer comparing our properties, with the "onPush" strategy implemented we need to change the reference to our object, we can do this by passing our property a new object rather than changing the propery in the object we created.

Comment out line sixteen and uncomment lines nineteen to twenty one, repeat the steps above and observe that the text is set to "bottom" again.
