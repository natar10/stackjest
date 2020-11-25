class AmountCalculator{

    regularCalculator(days){
        let thisAmount = 2;
        if (days > 2) {
            thisAmount += (days - 2) * 1.5;
        }    
        return thisAmount;
    }

    newCalculator(days){
        return days * 3;
    }

    childrensCalculator(days){
        let thisAmount = 1.5;
        if (days > 3) {
          thisAmount += (days - 3) * 1.5;
        }
        return thisAmount;
    }
  
  }
  
  export default AmountCalculator;
  