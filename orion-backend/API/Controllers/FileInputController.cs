using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLayer.ViewModels;
using BusinessLayer.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FileInputController : ControllerBase
	{
		[HttpPost]
		public IActionResult GetFileInputTextCount([FromServices] IGetTextFromFileCommand _command, [FromBody] FileUploadViewModel file)
		{
			return Ok(_command.Execute(new BusinessLayer.DTOs.FileToUpload(file.FileInBase64String)));
		}
	}
}
