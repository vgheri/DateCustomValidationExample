using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace DateCustomValidationExample.Models
{
    public class Project
    {
        public string Name { get; set; }

        public string ProjectManager { get; set; }

        [DisplayName("Start date")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]        
        public DateTime StartDate { get; set; }

        [DisplayName("Estimated end date")]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]
        [DateGreaterThan("StartDate")]
        public DateTime EndDate { get; set; }
    }
}