const weatherForm = document.querySelector('form')
const formData = document.querySelector('input')
const pOne = document.querySelector('#p1')
const pTwo = document.querySelector('#p2')

pOne.textContent = 'Please Add Location in form'



weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const data = formData.value
    fetch('/weather?address='+data).then((response) => {
        response.json().then((data) => {
            console.log(data)
           if(data.error){
            pOne.textContent = data.error 
           }
           else{
               console.log(data)
            pOne.textContent = data.location
            pTwo.textContent = data.forecast
           }
        })
    })
})