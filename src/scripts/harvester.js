export const harvestPlants = (plantsArray) =>{
    const newArray = [];
    for(const plant of plantsArray){
        if(Array.isArray(plant)){
            for(let i = 0; i < plant.output/2; i++){
                newArray.push(plant)        
            }
        }else{
            for (let i = 0; i < plant.output; i++) {
                newArray.push(plant)
            }
        }
    }
    return newArray
}

