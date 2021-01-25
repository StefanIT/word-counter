using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.DTOs
{
	public class CreateTextDto
	{
		public CreateTextDto(string inputText)
		{
			Text = inputText;
		}
		public string Text { get; set; }
	}
}
