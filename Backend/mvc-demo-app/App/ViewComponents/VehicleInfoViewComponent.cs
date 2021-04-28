using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace App.ViewComponents
{
  public class VehicleInfoViewComponent : ViewComponent
  {
    public Task<IViewComponentResult> InvokeAsync()
    {
      return Task.FromResult<IViewComponentResult>(View("VehicleInfo"));
    }
  }
}