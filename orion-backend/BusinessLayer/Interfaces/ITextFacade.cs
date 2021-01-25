using BusinessLayer.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces
{
	public interface ITextFacade
	{
		ITextFactory GetTextFactory(InputTextTypes type);
	}
}
