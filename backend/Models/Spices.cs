using System;

namespace WebApplication.Models
{
    internal class Spices
    {
        internal string name;

        public int? SpicesId { get; internal set; }
        public object SpicesName { get; internal set; }
        public object Address { get; internal set; }
        public int Id { get; internal set; }

        internal void SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}