﻿using BusinessLayer.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces
{
	public interface IGetTextFromFileCommand : IActionCommand<FileToUpload,WordCounter>
	{
	}
}
