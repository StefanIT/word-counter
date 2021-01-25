using BusinessLayer;
using BusinessLayer.DTOs;
using BusinessLayer.Enums;
using Implementation.Factories;
using BusinessLayer.Interfaces;
using BusinessLayer.Interfaces.Repositories;
using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Implementation.Commands
{
	public class GetTextsCommand : IGetTextsCommand
	{
		private readonly ITextRepository _textRepository;
		private readonly ITextFacade _textFacade;
		private readonly ITextFactory _databaseTextFactory;

		public GetTextsCommand(ITextRepository textRepository, ITextFacade textFacade)
		{
			_textRepository = textRepository;
			_textFacade = textFacade;
			_databaseTextFactory = _textFacade.GetTextFactory(InputTextTypes.DatabaseInput);
		}

		public List<WordCounter> Execute()
		{
			var texts = _textRepository.GetAll();
			return texts?.Select(x => 
									new WordCounter(_databaseTextFactory.ReadTextFromUserInput(new UserInputDto { Content = x.Content }).Count, x.Content, x.Id ))
						 .ToList();
		}
	}
}
