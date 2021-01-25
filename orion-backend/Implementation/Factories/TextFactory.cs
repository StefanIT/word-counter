using BusinessLayer.DTOs;
using BusinessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;

namespace Implementation.Factories
{
	public abstract class TextFactory : ITextFactory
	{
		public virtual WordCounter ReadTextFromUserInput(UserInputDto text)
		{
			return CountWordsInText(text.Content);
		}

		private WordCounter CountWordsInText(string text)
		{
			var arrayOfWords = text.Split((char[])null, StringSplitOptions.RemoveEmptyEntries);
			return new WordCounter(arrayOfWords.Length, text);
		}
	}
}
