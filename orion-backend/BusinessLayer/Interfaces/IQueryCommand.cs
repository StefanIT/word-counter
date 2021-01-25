using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces
{
	public interface IQueryCommand<TResult>
	{
		TResult Execute();
	}
	public interface IActionCommand<TRequest,TResult>
	{
		TResult Execute(TRequest dto);
	}
}
