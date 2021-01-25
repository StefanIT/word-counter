using BusinessLayer.DTOs;
using BusinessLayer.Enums;
using BusinessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Implementation.Commands
{
	public class GetUserInputTextCommand : IGetUserInputTextCommand
	{
		private readonly ITextFacade _textFacade;
		public GetUserInputTextCommand(ITextFacade textFacade)
		{
			_textFacade = textFacade;
		}

		public WordCounter Execute(UserInputDto model)
		{
			var _userInputTextFactory = _textFacade.GetTextFactory(InputTextTypes.UserInput);
			return _userInputTextFactory.ReadTextFromUserInput(model);
		}
	}
}
