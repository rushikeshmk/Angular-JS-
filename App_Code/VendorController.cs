using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

public class VendorController : ApiController
{
    public HttpResponseMessage GetAppData()
    {
        return Request.CreateResponse(HttpStatusCode.OK, "Ok");
    }
   
}
