using BusinessLayer.DTOs;
using BusinessLayer.Enums;
using BusinessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;

namespace Implementation.Factories
{
	public class FileTextFactory : TextFactory
	{
		public override WordCounter ReadTextFromUserInput(UserInputDto dto)
		{
			var text = Regex.Replace(dto.Content, RegexValidators.BASE_64_TYPE,"");
			var bytes = Convert.FromBase64String(text);
			var contents = new StreamReader(new MemoryStream(bytes),Encoding.ASCII).ReadToEnd();
			return base.ReadTextFromUserInput(new UserInputDto { Content = contents });
		}
	}
}
