using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
  public class VehiclesController : Controller
  {
    //Action metod...
    [HttpGet()]
    public IActionResult Index()
    {
      return View("Index");
    }
  }
}
