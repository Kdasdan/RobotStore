using Microsoft.AspNetCore.Mvc;

namespace RobotStoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Account>>> GetAccounts()
        {
            return Ok(await _context.Accounts.ToListAsync());
        }
    }
}
