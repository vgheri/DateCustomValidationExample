using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DateCustomValidationExample.Models;

namespace DateCustomValidationExample.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        //
        // POST: /Home/
        [HttpPost]
        public ActionResult Index(Project model)
        {
            return View(model);
        }

    }
}
