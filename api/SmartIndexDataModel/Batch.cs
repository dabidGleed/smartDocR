//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SmartIndexDataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class Batch
    {
        public int Batchid { get; set; }
        public string Batchname { get; set; }
        public string Ocrengine { get; set; }
        public Nullable<int> Priority { get; set; }
        public Nullable<int> Totalnoofpages { get; set; }
        public Nullable<int> Processingpages { get; set; }
        public Nullable<int> Classifieddocs { get; set; }
        public Nullable<int> UnClassifieddocs { get; set; }
        public Nullable<int> Statusid { get; set; }
        public Nullable<int> QueueStatusid { get; set; }
        public string BatchPath { get; set; }
        public Nullable<System.DateTime> Createddate { get; set; }
        public Nullable<int> Createdby { get; set; }
        public Nullable<System.DateTime> Modifieddate { get; set; }
        public Nullable<int> Modifiedby { get; set; }
        public Nullable<bool> Isactive { get; set; }
        public Nullable<int> Classifydocs { get; set; }
        public Nullable<int> NoofExtractions { get; set; }
    }
}
