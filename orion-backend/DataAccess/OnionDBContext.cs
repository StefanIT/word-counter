using DataAccess.Configurations;
using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess
{
	public class OnionDBContext : DbContext
	{
        public DbSet<Text> Texts { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(@"Data Source=desktop-j89lq5j;Initial Catalog=onion;Integrated Security=True;Pooling=False", b => b.MigrationsAssembly("DataAccess"));
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
            modelBuilder.ApplyConfiguration(new TextConfiguration());
        }

        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries())
            {
                if (entry.Entity is BaseEntity e)
                {
                    switch (entry.State)
                    {
                        case EntityState.Added:
                            e.DateCreated = DateTime.Now;
                            break;
                    }
                }
            }

            return base.SaveChanges();
        }
    }
}
