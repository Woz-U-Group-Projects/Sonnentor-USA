using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BookService.Models
{
    public class DbContext
    {
        public DbSet<Products> Products { get; set; }
    }
}