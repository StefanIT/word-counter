using BusinessLayer.DTOs;
using BusinessLayer.Exceptions;
using BusinessLayer.Interfaces;
using BusinessLayer.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace Implementation.Commands
{
	public class GetTextCommand : IGetSelectedTextCommand
	{
		private readonly ITextRepository _textRepository;
		public GetTextCommand(ITextRepository textRepository)
		{
			_textRepository = textRepository;
		}
		public TextDto Execute(int id)
		{
			var text = _textRepository.GetById(id);
			if(text == null)
			{
				throw new EntityNotFoundException(id, typeof(TextDto));
			}
			return new TextDto { Text = text.Content, Id = text.Id };

		}
	}
}
