# serverless-deployment-demo back-end
This spins up a serverless API to serve requests from the front-end.

Written in: C# (dotnetcore2.1)

## Usage
First build:
`./build.sh`

Then deploy:
`sls deploy --aws-profile {your-profile-name}`

---

# Neat things about this project
* We use AWS XRay for tracing

---

# Project Layout

    .
    ├── build.*                     # These files build the project
    ├── LambdaFunctions.cs          # The code that generates the responses
    ├── README.md
    ├── serverless.yml              # The file that controls what resources are spun up on deployment
    └── sls-deployment-demo.csproj  # The CSPROJ for the Lambda function code