using BusinessLayer.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces
{
	public interface ITextFactory
	{
		WordCounter ReadTextFromUserInput(UserInputDto text);
	}
}
