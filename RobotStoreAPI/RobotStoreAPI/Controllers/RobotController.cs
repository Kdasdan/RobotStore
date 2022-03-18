using Microsoft.AspNetCore.Mvc;

namespace RobotStoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RobotController : ControllerBase
    {
        private readonly DataContext _context;

        public RobotController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Robot>>> Get()
        {
            return Ok(await _context.Robots.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Robot>> Get(int id)
        {
            var robot = await _context.Robots.FindAsync(id);
            if (robot == null)
                return BadRequest("Robot not found.");
            return Ok(robot);
        }

        [HttpPost]
        public async Task<ActionResult<Robot>> AddRobot(Robot robot)
        {
            _context.Robots.Add(robot);
            await _context.SaveChangesAsync();

            return Ok(await _context.Robots.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<Robot>> UpdateRobot(Robot request)
        {
            var dbRobot = await _context.Robots.FindAsync(request.Id);
            if (dbRobot == null)
                return BadRequest("Robot not found.");

            dbRobot.Name = request.Name;
            dbRobot.Price = request.Price;

            await _context.SaveChangesAsync();

            return Ok(await _context.Robots.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Robot>>> DeleteRobot(int id)
        {
            var robot = await _context.Robots.FindAsync(id);
            if (robot == null)
                return BadRequest("Robot not found.");

            _context.Robots.Remove(robot);
            await _context.SaveChangesAsync();

            return Ok(await _context.Robots.ToListAsync());
        }
    }
}
