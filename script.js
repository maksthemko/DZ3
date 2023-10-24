class Temp_valid {
    constructor (form, id_array) {
        this.form = form
        this.id_array = id_array
        this.validationSubmit()

    }
    validationSubmit(){
        const self =this
        this.form.addEventListener('keyup', (event) =>{
            event.preventDefault()
            console.log(event)

            let error =0
            const out = self.id_array.map(Field => {
                const input = document.querySelector(`#${Field}`)
                //console.log('0', input)
                if(self.validateFields(input) == false){
                    error++
                    return null
                }
                else{
                    return input.value
                }
                
            })

            if(error == 0){
            document.getElementById("result").innerText = "Ответ: "+self.convertTemperature(out[0],out[1]).toFixed(5)
            }
        })
    }


    convertTemperature(value, unit) {
        if (unit === "Celsius") {
            return value * 9 / 5 + 32
        } else if (unit === "Fahrenheit"){
            return (value - 32) * 5 / 9 
        }
    }



    validateFields (field) {
        if (field.value.trim() === '') {
            
            this.setStatus(
                field, `Поле (${field.previousElementSibling.innerText}) не заполнено`, `error`
             )
             return false
        } else {
            
            if (field.type == 'text'){
                //console.log('4',typeof(field.value))
                if ((typeof(field.value) == "string") &&(!isNaN(parseFloat(field.value)))) {
                    this.setStatus(field,"","success")
                    return true 
                  
                } else {
                   // console.log('4',field)
                    this.setStatus(field,`В поле (${field.previousElementSibling.innerText}) не число!!!`,`error`)
                    return false  
                }


            }
            else{
                this.setStatus(field,null,"success")
                return true   
            }
        }
    }
    setStatus (field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-mess")
        
        if(status == 'success') {
            if (errorMessage) {
                errorMessage.innerText =''
            }
            field.classList.add('input-error-message')
        }
        if(status == 'error') {
            if (errorMessage) {
                errorMessage.innerText =message
            }
            field.classList.add('input-error-message')
        }
    }
}

const form = document.querySelector(".formLogin")

if (form){
    const id_array = ['Temp_input','Temp_select']
    
    const validator = new Temp_valid (form, id_array)

    //const wer = validator.out

    //console.log(wer)
}

function myFunction() {
    //console.log("asdasd")
    var x = document.getElementById("fname").value;
    console.log(x)
    const wwww = document.getElementById("demo").innerText = x;
  }