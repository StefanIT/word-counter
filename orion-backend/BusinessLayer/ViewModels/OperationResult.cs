using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.ViewModels
{
	public class OperationResult<T>
	{
		public T Data { get; set; }
		public string Message { get; set; }
		public bool Success { get; set; }
		public int StatusCode { get; set; }
	}
}
