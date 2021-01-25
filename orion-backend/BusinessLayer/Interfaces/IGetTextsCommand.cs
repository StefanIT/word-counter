using BusinessLayer.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces
{
	public interface IGetTextsCommand : IQueryCommand<List<WordCounter>>
	{
	}
}
