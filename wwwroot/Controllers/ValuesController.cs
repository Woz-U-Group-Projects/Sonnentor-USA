using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
        [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        // GET: api/values
        [HttpGet]
        [Produces("application/dan+json")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{id}")]

        public string Get([FromQuery] int id, string query)
        {
            return Ok(new ValuesController { ID = id, Text = "value" + id });
        }


        [HttpPost]

        public void Post([FromBody]Value value)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // save the value to the db

            return CreatedAtAction("Get", new { id = value.Id}, value);
        }
    }
}