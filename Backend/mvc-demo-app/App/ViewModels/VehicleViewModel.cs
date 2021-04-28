using System;

namespace App.ViewModels
{
  public class VehicleViewModel
  {
    public string Name { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public string RegistrationNumber { get; set; }
    public bool IsImported { get; set; }
    public DateTime RegistrationDate { get; set; }
  }
}