const calculator = {
    add:function addition(fNum, sNum){
        return (fNum+sNum);
    },
    subtract:function minus(fNum, sNum){
        return (fNum-sNum);
    },
    multiply:function multi(fNum, sNum){
        return (fNum*sNum);
    },
    divide:function divid(fNum, sNum){
        return (fNum/sNum);
    },
    power:function pow(fNum, sNum){
        return (fNum**sNum);
    }
}

const plusResult = calculator.add(1,2);
const minusResult = calculator.subtract(1,2);
const timesResult = calculator.multiply(1,2);
const divideResult = calculator.divide(timesResult,2);
const powerResult = calculator.power(1,divideResult);

