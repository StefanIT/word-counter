using System;

namespace Domain
{
	public abstract class BaseEntity
	{
		public int Id { get; set; }
		public DateTime? DateCreated { get; set; }
	}
}
