const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.getElementById('result');

  if(height === "" || height<0 || isNaN(height)){
    results.innerHTML = `Please Enter a Valid Height`;
  }
  else if(weight === "" || weight<0 || isNaN(weight)){
    results.innerHTML = `Please Enter A Valid Weight`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is : ${bmi}</span>`;
  }
})