class Deposit{
    static toCurrency(price, currentUnit, position = "left"){
        if(position === "left"){
            return `${price}${currentUnit}`
        }else{
            return `${currentUnit}${price}`
        }
    }
}

export default Deposit;