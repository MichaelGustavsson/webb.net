using App.Models;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
  //Attribut baserad routing...
  [Route("vehicles")]
  public class VehiclesController : Controller
  {
    //Action metod...
    [HttpGet()]
    [Route("index")]
    public IActionResult Index()
    {
      var message = "Detta är ett meddelande ifrån Mamma";
      ViewBag.data = message;

      return View("Index");
    }

    [HttpGet()]
    [Route("list")]
    public IActionResult List()
    {
      return View("List");
    }

    [HttpGet()]
    [Route("register")]
    public IActionResult Register()
    {
      return View("Register");
    }

    [HttpGet()]
    [Route("vehicle/{id}/{key}")]
    public IActionResult Vehicle(int id, int name)
    {
      ViewBag.vehicle = "Volvo Amazon med id " + id.ToString();
      return View("Vehicle");
    }

    [HttpPost()]
    public IActionResult Add()
    {
      return Content("Sparat bilen");
    }
  }
}
