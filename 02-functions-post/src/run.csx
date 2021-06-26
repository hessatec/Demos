#r "Newtonsoft.Json"

using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;

public class AnalyticsJsonRequest
{
    public float timeSpentOnPage { get; set; }
    public int numLinksClicked { get; set; }
}

public class AnalyticsJsonResponse
{
    public string userId { get; set; }
    public float timeSpentOnPage { get; set; }
    public int numLinksClicked { get; set; }
}

public static IActionResult Run(AnalyticsJsonRequest req, string userid, out string outputBlob, ILogger log)
{
    log.LogInformation("C# HTTP trigger function processed a request.");

    AnalyticsJsonResponse resp = new AnalyticsJsonResponse 
    {
        userId = userid,
        timeSpentOnPage = req.timeSpentOnPage,
        numLinksClicked = req.numLinksClicked
    };

    string serializedJson = JsonConvert.SerializeObject(resp, Formatting.Indented);

    log.LogInformation(serializedJson);

    outputBlob = serializedJson;

    return new OkObjectResult(resp);
}
