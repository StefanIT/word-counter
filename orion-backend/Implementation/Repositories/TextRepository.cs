using BusinessLayer.Interfaces.Repositories;
using DataAccess;
using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Implementation.Repositories
{
	public class TextRepository : EfRepository<Text>, ITextRepository
	{
		public TextRepository(OnionDBContext appDbContext) : base(appDbContext)
		{
		}
	}
}
