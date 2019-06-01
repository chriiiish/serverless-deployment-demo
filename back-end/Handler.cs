using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.XRay.Recorder.Core;
using Amazon.XRay.Recorder.Handlers.AwsSdk;
using System;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Serverless.DeploymentDemo
{
    public class Handler
    {
       public APIGatewayProxyResponse Hello(APIGatewayProxyRequest request, ILambdaContext context)
       {
          initFunction();
          return new APIGatewayProxyResponse{
             StatusCode = 200,
             Body = "Go Serverless v1.0! Your function executed successfully!"
          };
       }

      /// <summary>
      /// This function sets up the logging/tracing
      /// </summary>
       private void initFunction()
       {
          AWSSDKHandler.RegisterXRayForAllServices();
       }
    }
}
