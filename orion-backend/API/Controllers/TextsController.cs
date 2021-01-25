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
	public class TextsController : ControllerBase
	{
		[HttpPost]
		public IActionResult CreateNewTextRow([FromServices] IAddTextCommand _command, [FromBody] TextViewModel textViewModel)
		{
			// TO DO: USE AUTOMAPPER
			var result = _command.Execute(new BusinessLayer.DTOs.CreateTextDto(textViewModel.Content));
			if (result.Success)
			{
				return Ok(result.Data);
			}
			return StatusCode(result.StatusCode, result);
		}

		[HttpGet]
		public IActionResult GetDatabaseTexts([FromServices] IGetTextsCommand _command)
		{
			return Ok(_command.Execute());
		}
	}
}
