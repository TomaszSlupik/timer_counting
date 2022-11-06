const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const btn = document.querySelector('.btn')

const timer = () => {
    input1.setAttribute('disabled', '')
    input2.setAttribute('disabled', '')
    btn.setAttribute('disabled', '')


    var minutes  = Number(input1.value)
    var seconds  = Number(input2.value)

    var secondLeft = minutes * 60 + seconds
    
    var interval = setInterval(function (){

        if (secondLeft > 0) {
            secondLeft -= 1

            input1.value = Math.floor(secondLeft / 60)
            input2.value = secondLeft % 60
        }

        else {
            clearInterval(interval)
            input1.removeAttribute('disabled')
            input2.removeAttribute('disabled')
            btn.removeAttribute('disabled')

        }
    }, 1000)
    
}


btn.addEventListener('click', timer)




