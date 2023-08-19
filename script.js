const button = document.querySelector('#btn');

button.addEventListener('click', calculateAmount);

const buttonInsurance = document.querySelector('#insurance');
buttonInsurance.addEventListener('click', showPercent);

function showPercent(e){
    e.preventDefault();
    percent.style.display = 'block';
}

function calculateAmount(e){
    e.preventDefault();

    const bill = document.querySelector('#bill').value;
    const percent = document.querySelector('#percent').value;

    if (bill === ''){
        Swal.fire({
            title: 'Enter the invoice amount!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    else if (bill < 0.1){
        Swal.fire({
            title: 'The invoice amount should be higher than 0!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }


    let insurancePays = bill * percent;

    let clientPays = bill - insurancePays;

    document.querySelector('#client').textContent = clientPays.toFixed(2);
    document.querySelector('#insur').textContent = insurancePays.toFixed(2);
}
