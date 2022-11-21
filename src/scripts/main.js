console.log("Welcome to the main module")

import {createPlan} from './plan.js'
const yearlyPlan = createPlan()
// console.log(yearlyPlan)

import { plantSeeds } from './tractor.js'
const seedsToPlant = plantSeeds(yearlyPlan)
console.log(seedsToPlant)




import { harvestPlants } from './harvester.js'
// const harvesterArray = harvestPlants(newArray)
// console.log(harvesterArray)