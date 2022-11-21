import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
import { createCorn } from "./seeds/corn.js"
const cornSeed = createCorn()
// console.log(cornSeed)
import { createPotato } from "./seeds/potato.js"
const potatoSeed = createPotato()
// console.log(potatoSeed)
import { createSoybean } from "./seeds/soybean.js"
const soybeanSeed = createSoybean()
// console.log(soybeanSeed)
import { createSunflower } from "./seeds/sunflower.js"
const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)
import { createWheat } from "./seeds/wheat.js"
const wheatSeed = createWheat()


export const plantSeeds = (yearlyPlantingPlan) =>{
    for(let i of yearlyPlantingPlan){
        for(let j of i){
            if(j === "Asparagus"){
                addPlant(asparagusSeed)
            }
            if(j === "Corn"){
                addPlant(cornSeed)
            }
            if(j === "Potato"){
                addPlant(potatoSeed)
            }
            if(j === "Soybean"){
                addPlant(soybeanSeed)
            }
            if(j === "Sunflower"){
                addPlant(sunflowerSeed)
            }
            if(j === "Wheat"){
                addPlant(wheatSeed)
            }
        }
    }return usePlants()
}