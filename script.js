const from = document.querySelector("form")
// const weight = parseInt(document.querySelector("#weight").value)
// not storing here or else it will take the default empty value as soon as the page loads cuz the script is ruuning


from.addEventListener('submit', function(e){

    e.preventDefault() //to prevent submiton to the server as in this use case we dont want to submit the values to the server 

    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    const resultDisplay = document.querySelector("#resultDisplay")

    if(height === ' ' || height<0 || isNaN(height))
    {
        resultDisplay.innerHTML = 'Please give a valid height';
    }
    else if(weight === ' ' || weight<0 || isNaN(weight))
    {
        resultDisplay.innerHTML = 'Please give a valid weight';
    }
    else
    {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi<18.6)
        {
        resultDisplay.innerHTML =   `Your BMI: <span>${bmi}</span><br><br>You are underweight`;
        }
        else if(bmi>18.6 && bmi<24.9)
        {
        resultDisplay.innerHTML = `Your BMI: <span>${bmi}</span><br><br>You are normal`;
        }
        else
        {
            resultDisplay.innerHTML = `Your BMI: <span>${bmi}</span><br><br>You are overweight`;
        }
    }
})

