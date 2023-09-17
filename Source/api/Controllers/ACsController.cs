using MachineTestAPI.Business;
using MachineTestAPI.Models.Parameters;
using Microsoft.AspNetCore.Mvc;


namespace MachineTestAPI.Controllers
{
    [ApiController]
    [Route("api/acs")]
    public class ACsController : ControllerBase
    {
        private FiltersBusiness _filtersBusiness;
        public ACsController(FiltersBusiness filtersBusiness)
        {
            _filtersBusiness = filtersBusiness;
        }

        [HttpPost("filterBooksByAuthor")]
        public async Task<IActionResult> FilterBooksByAuthor(RequestParameter request)
        {

            var response = _filtersBusiness.FilterBooksByAuthor(request);
            return Ok(response);
        }


        [HttpPost("filterAuthorWhoWrote")]
        public async Task<IActionResult> FilterAuthorWhoWrote(RequestParameter request)
        {

            var response = _filtersBusiness.FilterAuthorWhoWrote(request);
            return Ok(response);
        }


        [HttpPost("filterAuthorWhoHaveNotWrote")]
        public async Task<IActionResult> FilterAuthorWhoHaveNotWrote(RequestParameter request)
        {

            var response = _filtersBusiness.FilterAuthorWhoHaveNotWrote(request);
            return Ok(response);
        }

        [HttpPost("filterAuthorVsBooks")]
        public async Task<IActionResult> FilterAuthorVsBooks(RequestParameter request)
        {

            var response = _filtersBusiness.FilterAuthorVsBooks(request);
            return Ok(response);
        }

        [HttpPost("filterByValue")]
        public async Task<IActionResult> FilterByValue(RequestParameter request)
        {

            var response = _filtersBusiness.FilterByValue(request);
            return Ok(response);
        }
    }
}
