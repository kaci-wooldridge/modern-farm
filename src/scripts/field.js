// Define a variable in this module whose initial value is an empty array.

// This array will store all of the plants that are growing in the field. 

// In the module, define and export a function named addPlant.

// The addPlant function must accept a seed object as input. 
// The function will add the seed to the field.

// Define and export a function named usePlants that returns a copy 
// of the array of plants.


const plantsInFieldArray = []

export const addPlant = (seedObject) =>{
    if(Array.isArray(seedObject)){
        seedObject.map((s) =>(plantsInFieldArray.push(s)))
    }else{
        plantsInFieldArray.push(seedObject)
    }
    return plantsInFieldArray
}



export const usePlants = () =>{
    return plantsInFieldArray.map(plantElement =>({...plantElement}))
}