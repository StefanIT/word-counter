using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.DTOs
{
    public class FileToUpload
    {
		public FileToUpload(string fileAsBase64)
		{
            FileAsBase64 = fileAsBase64;

        }
        public string FileAsBase64 { get; set; }
    }
}
