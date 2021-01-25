using BusinessLayer.Enums;
using BusinessLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Implementation.Factories
{
	public class TextFacade : ITextFacade
	{
		public ITextFactory GetTextFactory(InputTextTypes type)
		{
			switch (type)
			{
				case InputTextTypes.DatabaseInput:
					return new DatabaseTextFactory();
				case InputTextTypes.FileInput:
					return new FileTextFactory();
				default:
					return new UserInputTextFactory();
			}
		}
	}
}
