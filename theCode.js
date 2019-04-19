let program = {
    run: function () {
        let minNumberRange = 1;
        let maxNumberRange = 100;

        program.iterateNumbers(minNumberRange, maxNumberRange);
    },
    iterateNumbers: function (minNumber, maxNumber) {
        for (let currentNumber = minNumber; currentNumber <= maxNumber; currentNumber++) {
            program.logMessage(currentNumber);
        }
    },
    logMessage: function (number) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('ХопаТропа');
        } else if (number % 5 === 0) {
            console.log('Тропа');
        } else if (number % 3 === 0) {
            console.log('Хопа');
        } else {
            console.log(number);
        }
    }
};

program.run();