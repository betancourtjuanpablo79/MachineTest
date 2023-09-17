using MachineTestAPI.Business;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace MachineTestAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MachineTestController : ControllerBase
    {
        private MachineTestBusiness _machineTestBusiness;


        public MachineTestController (MachineTestBusiness machineTestBusiness)
        {
            _machineTestBusiness = machineTestBusiness;
        }


        [HttpPost("validateConnection")]
        public async Task<IActionResult> ValidateConection()
        {
            var response = new
            {
                success = true
            };

            return Ok(response);
        }


        [HttpPost("uploadFile")]
        public IActionResult Upload(IFormFile file)
        {
            var response = _machineTestBusiness.UploadFile(file);

            return Ok(response);
        }

    }
}
