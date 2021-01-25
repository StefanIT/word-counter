using BusinessLayer.Interfaces.Repositories;
using DataAccess;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Implementation.Repositories
{
	public abstract class EfRepository<T> : IRepository<T> where T : BaseEntity
	{
		protected readonly OnionDBContext _appDbContext;

		protected EfRepository(OnionDBContext appDbContext)
		{
			_appDbContext = appDbContext;
		}

		public void Add(T entity)
		{
			_appDbContext.Set<T>().Add(entity);
			_appDbContext.SaveChanges();
		}

		public List<T> GetAll()
		{
			return _appDbContext.Set<T>().ToList();
		}

		public virtual T GetById(int id)
		{
			return _appDbContext.Set<T>().Find(id);
		}
	}
}
