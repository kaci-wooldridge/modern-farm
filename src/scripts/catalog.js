export const catalogFunction = (harvestedFood) =>{
    let htmlString = ''
    for(const food of harvestedFood){
        htmlString += `<section class="plant">${food.type}</section>\n`
    }
    return htmlString
}