"use strict";
/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const finalDistance = initialDistance + ( initialVelocity * time ) //calcultes new distance
const remainingFuel = fuelBurnRate * time //calculates remaining fuel
const finalVelocity = calcNewVel(acceleration, initialVelocity, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calculateNewVelocity = (initialVelocity, acceleration, time) => { 
  return initialVelocity + ( acceleration * time)
}

console.log(`Corrected New Velocity: ${finalVelocity} km/h`);
console.log(`Corrected New Distance: ${finalDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






