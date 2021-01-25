using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces.Repositories
{
	public interface IRepository<T> where T : BaseEntity
	{
		List<T> GetAll();
		T GetById(int id);
		void Add(T entity);
	}
}
