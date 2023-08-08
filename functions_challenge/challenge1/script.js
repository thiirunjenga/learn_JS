

const getCelsius = (tempInFahrenheit) => {
    return `the temperature is ` + Math.ceil((tempInFahrenheit - 32) * 5 /9) + ` degrees celsius`;
};

console.log(getCelsius(32));