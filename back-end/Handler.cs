using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;
using System;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Serverless.DeploymentDemo
{
    public class Handler
    {
       public APIGatewayProxyResponse Hello(APIGatewayProxyRequest request, ILambdaContext context)
       {
           return new APIGatewayProxyResponse{
             StatusCode = 200,
             Body = "Go Serverless v1.0! Your function executed successfully!"
           };
       }
    }
}
