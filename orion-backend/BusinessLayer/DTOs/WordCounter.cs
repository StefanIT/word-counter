using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.DTOs
{
	public class WordCounter
	{
		public WordCounter(long count, string text,int? id = null)
		{
			Count = count;
			Text = text;
			Id = id;
		}
		public long Count { get; set; }
		public string Text { get; set; }
		public int? Id { get; set; }
	}
}
