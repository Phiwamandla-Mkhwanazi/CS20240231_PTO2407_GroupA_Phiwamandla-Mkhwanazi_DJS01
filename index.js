"use strict";
/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

const spacecraft = 
{
  // Given Parameters
  initialVelocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  initialDistance: 0, // distance (km)
  initialFuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5, // fuel burn rate (kg/s)

  //Spacecraft functions
  finalDistance: function()
  {
     return this.initialDistance + ( this.initialVelocity * this.time );//calcultes new distance
  },
  
  remainingFuel: function()
  {
    return this.initialFuel - (this.fuelBurnRate * this.time); //calculates remaining fuel
  },
 
  finalVelocity: function()
  {
    return this.calculateNewVelocity();//calculates new velocity based on acceleration
  }, 

  // Pick up an error with how the function below is called and make it robust to such errors
  //This function is responsible for obtaining the initial velocity in m/s
  calculateNewVelocity: function()
  { 
    return this.initialVelocity + ( this.acceleration * this.time);
  }
}

// Destructuring - Spacecraft Object
const { finalVelocity, finalDistance, remainingFuel } = spacecraft;

//Call Spacecraft functions to get more information
console.log(`Corrected New Velocity: ${finalVelocity()} km/h`); 
console.log(`Corrected New Distance: ${finalDistance()} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel()} kg`);






