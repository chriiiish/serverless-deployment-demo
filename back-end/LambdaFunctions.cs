using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.XRay.Recorder.Core;
using Amazon.XRay.Recorder.Handlers.AwsSdk;
using Newtonsoft.Json;
using System;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Serverless.DeploymentDemo
{
   /// <summary>
   /// The lambda functions that return responses
   /// </summary>
   public class LambdaFunctions
   {
      public const string API_VERSION = "1.0";

      /// <summary>
       /// Returns a single tweet. This updates using the Canary deployment method
       /// </summary>
       /// <param name="request">The request data passed in from the API request</param>
       /// <param name="context">The current lambda invocation context</param>
       /// <returns></returns>
      public APIGatewayProxyResponse GetTweet_Canary(APIGatewayProxyRequest request, ILambdaContext context)
      {
         initFunction();

         return generateResponse(new Tweet("I'm a Canary Deployment", "Lambda"));
      }

      /// <summary>
      /// Returns a single tweet. This updates using the Linear deployment method
      /// </summary>
      /// <param name="request">The request data pass in from the API request</param>
      /// <param name="context">The current lambda invocation context</param>
      /// <returns></returns>
      public APIGatewayProxyResponse GetTweet_Linear(APIGatewayProxyRequest request, ILambdaContext context)
      {
         initFunction();
         return generateResponse(new Tweet("I'm a Linear Deployment", "Lambda"));
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
         string bodyContent = JsonConvert.SerializeObject(new { 
                                                                  ApiVersion = API_VERSION,
                                                                  Tweet = body
                                                               });
         return new APIGatewayProxyResponse{
            StatusCode = statusCode,
            Body = bodyContent
         };
      }
   }

   /// <summary>
   /// A Tweet object
   /// </summary>
   public class Tweet
   {
      public string Message { get; set; }
      public string User { get; set; }

      public Tweet(string message, string user){
         Message = message;
         User = user;
      }
   }
}
