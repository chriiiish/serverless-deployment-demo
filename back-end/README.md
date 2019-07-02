# serverless-deployment-demo back-end
This spins up a serverless API to service requests from the front-end.

Written in: C# (dotnetcore2.1) & [Serverless Framework](https://serverless.com/)

## Before you deploy

1. Change the deployment profile (required)
    The current deployment profile name is "rezare-personal". Change this to "default" or your aws cli profile name. Line 12 (provider > profile)

2. Make sure you have the serverless framework installed, and the canary plugin
    `npm install serverless -g`
    `npm install`
    **Note! `serverless` must be installed globally. If you install it in this directory the build will fail. Running `npm install` will only install the deployment plugin.**

3. Make sure you have the aws cli installed
    `npm install awscli -g`
    ...and configured
    `aws configure`

4. Change the tags in the serverless.yml template (optional)
    These are the tags that get associated to the AWS resources. You can find them on line 13 (provider > tags).


## Demonstrating a deployment
1. First build the project:
    `./build.sh` or `.\build.cmd`

2. Then deploy:
    `sls deploy`
    This initial deploy should be quick. Because there is no code existing, it just does an all-at-once deployment

3. Verify the API works
    You should get the URL endpoints when you run the `sls deploy`. Navigate to those endpoints to check they're returning responses.
    ```
    GET https://gibberish.execute-api.region.amazonaws.com/dev/tweet/canary
    
    should return

    {"ApiVersion":"1.0","Tweet":{"Message":"I'm a Canary Deployment","User":"Lambda"}}
    ```

4. Update the API code
    Here we're just going to make a small change - change the version number from 1.0 to 2.0 in `LambdaFunctions.cs:18`

5. Build the project again
    `./build.sh` or `.\build.cmd`

6. Before you deploy, if you're running the front-end - start it with `ng serve` and enter in the URL for each function and click `GO` for each URL.
    You should see two sets of 10 blue lines that all say
    `V1.0 - I'm a Canary Deployment (Lambda)`

7. Run the deployment
    `sls deploy`

8. While the deployment is running check out two things
    1. The [CodeDeploy console](https://ap-southeast-2.console.aws.amazon.com/codesuite/codedeploy/deployments?region=ap-southeast-2) for your region. You should see two new deployments there. Clicking into those will show you the status
    2. The [AWS XRay console](https://ap-southeast-2.console.aws.amazon.com/xray/home?region=ap-southeast-2#/service-map) for a live view of the requests and average processing time
    2. If you're running the front end you'll start to see green V2.0 messages coming through:
        `V2.0 - I'm a Canary Deployment (Lambda)`
        
9. Watch the deployment run.
    Notice the Canary deployment sticks to 10% for 5 minutes then goes to 100%, while the linear one shifts 10% more traffic every minute for 10 minutes.

10. Deployment complete
    You should see that all responses now return V2.0!

---

# Neat things about this project
* We use AWS XRay for tracing
* Different functions use different deployment methods
    * Canary uses a 10% for 5 minutes, then 100% deployment method
    * Linear uses a "shift 10% more traffic every minute" strategy

---

# Project Layout

    .
    ├── build.*                     # These files build the project
    ├── LambdaFunctions.cs          # The code that generates the responses
    ├── README.md
    ├── serverless.yml              # The file that controls what resources are spun up on deployment
    └── sls-deployment-demo.csproj  # The CSPROJ for the Lambda function code

---

# Questions

1. What's a package.json, npm, node file doing in a C# project?
   That installs the *serverless* framework plugin for the deployment