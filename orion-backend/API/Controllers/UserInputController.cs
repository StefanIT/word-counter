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
	public class UserInputController : ControllerBase
	{
		[HttpPost]
		public IActionResult GetUserInputTextCount([FromServices] IGetUserInputTextCommand _command, [FromBody] TextViewModel textViewModel)
		{
			return Ok(_command.Execute(new BusinessLayer.DTOs.UserInputDto { Content = textViewModel.Content }));
		}
	}
}
