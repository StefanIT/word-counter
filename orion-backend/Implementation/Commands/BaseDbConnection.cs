using DataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace Implementation.Commands
{
	public class BaseDbConnection
	{
		protected OnionDBContext Context { get; set; }
		protected BaseDbConnection(OnionDBContext _context) => Context = _context;
	}
}
