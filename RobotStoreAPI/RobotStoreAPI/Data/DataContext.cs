using Microsoft.EntityFrameworkCore;

namespace RobotStoreAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Robot> Robots { get; set; }
        public DbSet<Account> Accounts { get; set; }
    }
}
