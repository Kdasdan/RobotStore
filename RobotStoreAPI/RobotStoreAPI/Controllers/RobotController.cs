﻿using Microsoft.AspNetCore.Mvc;

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
    }
}
