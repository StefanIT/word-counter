using BusinessLayer.DTOs;
using BusinessLayer.Enums;
using BusinessLayer.Exceptions;
using BusinessLayer.Interfaces;
using BusinessLayer.Interfaces.Repositories;
using BusinessLayer.ViewModels;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Implementation.Commands
{
	public class AddTextCommand : IAddTextCommand
	{
		private readonly ITextRepository _textRepository;
		private readonly ITextFacade _textFacade;
		public AddTextCommand(ITextRepository textRepository, ITextFacade textFacade)
		{
			_textRepository = textRepository;
			_textFacade = textFacade;
		}
		public OperationResult<WordCounter> Execute(CreateTextDto dto)
		{
			if(dto == null)
			{
				return new OperationResult<WordCounter>
				{
					Message = "Text not passed",
					Success = false,
					StatusCode = StatusCodes.Status400BadRequest
				};
			}
			_textRepository.Add(new Domain.Text { Content = dto.Text });
			var databaseFactory = _textFacade.GetTextFactory(InputTextTypes.DatabaseInput);
			var result = databaseFactory.ReadTextFromUserInput(new UserInputDto { Content = dto?.Text });
			return new OperationResult<WordCounter>
			{
				Data = result,
				Success = true
			};
		}
	}
}
