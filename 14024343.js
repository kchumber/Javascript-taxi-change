Vehicle = function(numWheels, color)
{
  this.numWheels = numWheels;
  this.color = color;
}
Vehicle.prototype.blowHorn = function()
{
  print("Beep!");
}
Taxi = function(badgeNumber)
{
  this.badgeNumber = badgeNumber;
}
Taxi.prototype = new Vehicle(4, "yellow");
var fleet = [];
for (var i = 0; i < 5; i++)
{
  fleet[i] = new Taxi(i);
}
for (var i = 0; i < fleet.length; i++)
{
  print("Taxi with badge number " + fleet[i].badgeNumber +
  " is " + fleet[i].color);
}
Taxi.prototype.color = "White";
for (var i = 0; i < fleet.length; i++)
{
  print("Taxi with badge number " + fleet[i].badgeNumber +
  " is " + fleet[i].color);
  fleet[i].blowHorn();
}
