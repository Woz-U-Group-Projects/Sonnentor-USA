using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;
using WebApplication.Models;

// static void DBController(string[] args)
//     {           
//         var connectionString ="mongodb://localhost:27017";
//         var client = new MongoClient(connectionString);           
//         IMongoDatabase db = client.GetDatabase(sonnentor);
//         var collection = db.GetCollection<BsonDocument>(spices);

//         collection.InsertMany(spices);
//         Console.Read();
//     }


namespace DBController.Controllers{
        [Route("api/[controller]")]
    public class DBController : Controller
    {
        private Spices _context;
        
        public DBController(Spices context){
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllSpices(){
            var spices = _context.Spices.ToList();
            return base.Ok(spices);
        }
        [HttpGet("{id}")]
        public IActionResult GetSpice(int id){
            var spice = _context.Spices.FirstOrDefault(cust => cust.Id == id);
            if (spice != null)
            {
                return base.Json(spice);
            }
            return base.NotFound();
        }

        [HttpPost]
        public IActionResult AddSpice([FromBody]Spice newSpice){
            if (newSpice != null){
                try
                {
                    _context.Spices.Add(newSpice);
                    _context.SaveChanges();
                    return base.Created($"/{newSpice.Id}", newSpice);
                }
                catch (System.Exception ex){
                    return base.StatusCode(500, ex.Message);
                }
            }
            return base.BadRequest();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSpice(int id, [FromBody]Spice updatedSpice){
            var spice = _context.Spices.FirstOrDefault(cust => cust.Id == id);
            if (spice != null)
            {
                try
                {
                    spice.FirstName = updatedSpice.FirstName;
                    spice.LastName = updatedSpice.LastName;
                    spice.Email = updatedSpice.Email;
                    _context.Update(spice);
                    _context.SaveChanges();
                    return base.NoContent();
                }
                catch (System.Exception ex)
                {
                    return base.BadRequest(ex.Message);
                }
            }
            return base.NotFound();
            } 

            [HttpDelete("{id}")]
            public IActionResult DeleteSpice(int id){
                var spice = _context.Spices.FirstOrDefault(cust => cust.Id == id);
            if (spice != null)
            {
                _context.Spices.Remove(spice);
                _context.SaveChanges();
                return base.NoContent();
            }
            return base.NotFound();
            }   
        }

}    
        // public DBController(){
        //     Spices = new List<Spices> {
        //         new Spices { Id=1, name="Cinnamon"}
        //     };
        // }
        // [HttpGet]
        // public List<Spices> GetAllSpices(){
        //     return this.spices;
        // }