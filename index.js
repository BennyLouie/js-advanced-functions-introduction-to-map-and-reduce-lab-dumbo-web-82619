function mapToNegativize(sourceArray){
    let newArray = []
    sourceArray.map(index => {
        newArray.push(index * -1)
    })
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    sourceArray.map(index => {
        newArray.push(index)
    })
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    sourceArray.map(index => {
        newArray.push(index * 2)
    })
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    sourceArray.map(index => {
        newArray.push(index ** 2)
    })
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce((total, currentValue) => {
        return total + currentValue
    }, startingPoint)
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (!sourceArray[i]){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]){
            return true
        }
    }
    return false
}