using Implementation.Factories;
using BusinessLayer.Interfaces;
using BusinessLayer.Interfaces.Repositories;
using Implementation.Commands;
using Implementation.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
	public static class ServiceExtensions
	{
		public static void AddCommands(this IServiceCollection services)
		{
			services.AddTransient<IGetUserInputTextCommand, GetUserInputTextCommand>();
			services.AddTransient<IGetTextFromFileCommand, GetTextFromFileCommand>();
			services.AddTransient<IGetTextsCommand, GetTextsCommand>();
			services.AddTransient<IAddTextCommand, AddTextCommand>();
		}

		public static void AddRepositories(this IServiceCollection services)
		{
			services.AddScoped(typeof(ITextRepository), typeof(TextRepository));
		}

		public static void AddFacades(this IServiceCollection services)
		{
			services.AddTransient<ITextFacade, TextFacade>();
		}
	}
}
