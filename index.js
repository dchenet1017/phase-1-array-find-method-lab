
function superbowlWin(matches){
    let results = matches.find(element => {
        if(element.result === 'W' ){
            return true
        }

    })
    console.log(results)
    if (results){
        return results.year
    } else{
        return undefined 
    }
    
}
