# serverless-deployment-demo front-end
This project creates a client-side web application to demonstrate the deployment methods on the API

This is designed to be a simple front-end that shows the contents of the API responses from the back-end.
It can be run locally with `ng serve` or you could host it as an S3 static site.

This sends requests to the API and shows the responses on the screen. It 
* Updates every second with
* 10 new responses
* Shows V1.0 API responses in BLUE
* Shows V2.0 API responses in GREEN

## Running this App
1. Make sure you have the following installed:
    * NPM
    * Angular (`npm install -g @angular/cli`)

2. Run the site
    From the front-end/ directory
    `ng serve`
    connect to `http://localhost:4200/`

3. Enter in the API endpoints
    In the **Canary** panel, enter the Canary URL into the box and click GO
    In the **Linear** panel, enter the Linear URL into the box and click GO
    *Note: the URLs are outputted during the back-end `sls deploy` step (see steps 2 & 7 in back-end instructions)*
    URLs take the format:
    ```
    https://gibberish.execute-api.region.amazonaws.com/dev/tweet/canary
    https://gibberish.execute-api.region.amazonaws.com/dev/tweet/linear
    ```

4. You should see both panels display a list of 10 blue boxes
    `V1.0 - I'm a Canary Deployment (Lambda)`
    *Note: These are being updated every second with 10 new API requests*

5. As you run the deployment these boxes will change until they are all green and say
    `V2.0 - I'm a Canary Deployment (Lambda)`

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

---

# When Developing on this Project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Project Layout

    .
    ├── e2e             # End-to-end tests
    ├── src
    │    ├── app        # Main Angular Module
    │    │    ├── api-requestor     # Component that does the API requests
    │    │    ├── api-results       # Component that renders the API results
    │    │    └── ...
    │    └── ...
    ├── ...
    └── README.md