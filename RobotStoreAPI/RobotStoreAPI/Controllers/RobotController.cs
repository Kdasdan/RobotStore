using Microsoft.AspNetCore.Mvc;

namespace RobotStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RobotController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Robot>>> Get()
        {
            var robots = new List<Robot>
            {
                new Robot {
                    Id = 1,
                    Name = "Robot",
                    Price = 500
                }
            };

            return Ok(robots);
        }
    }
}
