using BusinessLayer.DTOs;
using BusinessLayer.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces
{
	public interface IAddTextCommand : IActionCommand<CreateTextDto,OperationResult<WordCounter>>
	{
	}
}
