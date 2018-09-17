using Microsoft.EntityFrameworkCore;

namespace BackEnd.Models
{
    public class OnlineCoreContext : DbContext
    {
        public OnlineCoreContext(DbContextOptions<OnlineCoreContext> options) : base(options) { }

        public DbSet<Customer> Customers { get; set; }
    }
}