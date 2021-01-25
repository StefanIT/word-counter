using BusinessLayer.DTOs;
using BusinessLayer.Enums;
using BusinessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Implementation.Commands
{
	public class GetTextFromFileCommand : IGetTextFromFileCommand
	{
		private readonly ITextFacade _textFacade;
		public GetTextFromFileCommand(ITextFacade textFacade)
		{
			_textFacade = textFacade;
		}
		public WordCounter Execute(FileToUpload model)
		{
			var fileInputFactory = _textFacade.GetTextFactory(InputTextTypes.FileInput);
			return fileInputFactory.ReadTextFromUserInput(new UserInputDto { Content = model.FileAsBase64 });
		}
	}
}
