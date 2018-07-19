using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApplication.Data
{
    public class todoContext : DbContext
    {
        public todoContext(DbContextOptions<todoContext> options) : base(options)
        {

        }
        public DbSet<Todo> Todos { get; set; }
        
    }

}