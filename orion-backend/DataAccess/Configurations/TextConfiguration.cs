using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Configurations
{
	public class TextConfiguration : IEntityTypeConfiguration<Text>
	{
		public void Configure(EntityTypeBuilder<Text> builder)
        {
            builder.Property(t => t.Content)
                   .IsRequired();

            builder.Property(t => t.DateCreated)
                   .HasDefaultValueSql("getdate()");
        }
    }
}
