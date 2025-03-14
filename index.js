"use strict";

/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Conversion Constants
const VELOCITY_KMHR_TO_METERSEC = 1000 / 3600;
const VELOCITY_METERSEC_TO_KMHR = 3600 / 1000;

// Spacecraft Object with methods
const spacecraft = 
{
  initialVelocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  initialDistance: 0, // distance (km)
  initialFuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5, // fuel burn rate (kg/s)

  // Corrected method to calculate new velocity
  calcNewVel: function() 
  {
    return (this.initialVelocity * VELOCITY_KMHR_TO_METERSEC) + (this.acceleration * this.time); // returns velocity in m/s
  },

  // Final velocity method, convert result back to km/h
  finalVelocity: function() 
  {
    return this.calcNewVel() * VELOCITY_METERSEC_TO_KMHR; // Convert from m/s back to km/h
  },

  // Final distance method, distance is calculated in km
  finalDistance: function() {
    return this.initialDistance + (this.initialVelocity * (this.time / 3600)); // Convert Time to Hours
  },

  // Remaining fuel method
  remainingFuel: function() {
    return this.initialFuel - (this.fuelBurnRate * this.time); // Fuel consumed in kg
  }
};

// Destructuring
const { finalVelocity, finalDistance, remainingFuel } = 
{
  finalVelocity: spacecraft.finalVelocity.bind(spacecraft),
  finalDistance: spacecraft.finalDistance.bind(spacecraft),
  remainingFuel: spacecraft.remainingFuel.bind(spacecraft),
};

// Call Spacecraft functions to get more information
console.log(`Corrected New Velocity: ${finalVelocity()} km/h`); 
console.log(`Corrected New Distance: ${finalDistance()} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel()} kg`);

