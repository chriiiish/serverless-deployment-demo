# serverless-deployment-demo back-end
This spins up a serverless API to service requests from the front-end.

Written in: C# (dotnetcore2.1) & [Serverless Framework](https://serverless.com/)

## Before you deploy

1. Change the tags in the serverless.yaml template
    These are the tags that get associated to the AWS resources. You can find them on line 13 (provider > tags).
2. Change the deployment profile
    The current deployment profile name is "rezare-personal". Change this to "default" or your aws cli profile name. Line 12 (provider > profile)
3. Make sure you have the serverless framework installed
    `npm install serverless -g`
4. Make sure you have the aws cli installed
    `npm install awscli -g`
    ...and configured
    `aws configure`

## Using the project (deployment)
1. First build the project:
    `./build.sh` or `.\build.cmd`

2. Then deploy:
    `sls deploy`

This will deploy a the application into your AWS account. The above command will give you the URLs to call to make sure it's working.

Once you've done that, deploy the front-end to CloudFront (see instructions in the other project) and change the URLs to match.

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