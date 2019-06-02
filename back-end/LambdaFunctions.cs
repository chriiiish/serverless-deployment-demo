using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.XRay.Recorder.Core;
using Amazon.XRay.Recorder.Handlers.AwsSdk;
using Newtonsoft.Json;
using System;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Serverless.DeploymentDemo
{
    public class LambdaFunctions
    {
       /// <summary>
       /// Returns a single tweet. This updates using the Canary deployment method
       /// </summary>
       /// <param name="request">The request data passed in from the API request</param>
       /// <param name="context">The current lambda invocation context</param>
       /// <returns></returns>
       public APIGatewayProxyResponse GetTweet_Canary(APIGatewayProxyRequest request, ILambdaContext context)
       {
          initFunction();
          return generateResponse("Go Serverless v1.0! Your function executed successfully!");
       }

      /// <summary>
      /// This function sets up the logging/tracing
      /// </summary>
       private void initFunction()
       {
          AWSSDKHandler.RegisterXRayForAllServices();
       }

      /// <summary>
      /// Generate a JSON Serialized API response object 
      /// </summary>
      /// <param name="body">The content of the response</param>
      /// <param name="statusCode">The HTTP status code</param>
      /// <returns></returns>
       private APIGatewayProxyResponse generateResponse(object body, int statusCode = 200)
       {          
          string bodyContent = JsonConvert.SerializeObject(body);

          return new APIGatewayProxyResponse{
             StatusCode = statusCode,
             Body = bodyContent
          };
       }
    }
}
