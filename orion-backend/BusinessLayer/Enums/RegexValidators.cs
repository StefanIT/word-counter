using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Enums
{
	public class RegexValidators
	{
		public const string BASE_64_TYPE = "data:(text/plain|application/msword);base64,";
		public const string BASE_64 = "data:(text/plain|application/msword);base64,(.+)";
	}
}
