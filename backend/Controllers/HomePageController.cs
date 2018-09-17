using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Models;

namespace BackEnd.Controllers
{
    public class HomePageController : Controller
    {
        // Use dependency injection to get the database context
        private readonly OnlineCoreContext _context;
        public HomePageController(OnlineCoreContext context)
        {
            _context = context;
        }
        public IActionResult Index() {

            // Get a list of all the customers in the system.
            var customers = _context.Customers.ToList();

            // Pass customers to the view
            return Json(customers);
        }

        [HttpGet]
        public IActionResult Edit(int id){
            Customer customers = _context.Customers.FirstOrDefault(c => c.Id == id);
            return View(customers);
        }

        private IActionResult View(Customer customers)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public IActionResult Edit(Customer editedCustomer){
            Customer originalCustomer = _context.Customers.FirstOrDefault(c => c.Id == editedCustomer.Id);
            originalCustomer.FirstName = editedCustomer.FirstName;
            originalCustomer.LastName = editedCustomer.LastName;
            originalCustomer.Email = editedCustomer.Email;
            _context.Customers.Update(originalCustomer);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}