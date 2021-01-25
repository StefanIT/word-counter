using BusinessLayer.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessLayer.ViewModels
{
	public class FileUploadViewModel
	{
		[RegularExpression(RegexValidators.BASE_64)]
		public string FileInBase64String { get; set; }
	}
}
