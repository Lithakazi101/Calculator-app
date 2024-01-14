



// Processing here 
document.addEventListener("DOMContentLoaded", function(){
    
    const inputField = document.querySelector('.cal input');
    const buttons = document.querySelectorAll('#btn-cal button');
    
    
    // Different function to handle digit and operator buttons

    function clearInput(){
        inputField.value = '';
    }
    
    function appendToInput(value){
        inputField.value += value;
    }

    // function evaluateInput(){
    //     // inputField.value = eval(inputFieldValue);
        
    // }

    function evaluateInput() {
        // Assuming inputField is an input element and inputFieldValue is its value
        const inputFieldValue = inputField.value;
    
        try {
            const result = new Function('return ' + inputFieldValue)();
            // Do something with the result, e.g., display it or perform further actions
            console.log("Result: " + result);
            inputField.value = result;
        } catch (error) {
            // Handle any errors that may occur during evaluation
            console.error('Error evaluating input:', error);
        }


       
    }
    
    function deleteLastInput(){
        inputField.value = inputField.value.slice(0, -1);
    }



    function handleButton(buttonValue){


        switch(buttonValue){

            case 'AC':
                clearInput();
            break;

            case 'DEL':
                deleteLastInput();
            break;

            case '=':
                evaluateInput();
            break;

            default:
                appendToInput(buttonValue);
          
        }
    }

    // We listen the event here
    buttons.forEach((button) =>{
    button.addEventListener('click', function(){
        const buttonValue = this.getAttribute('data-value');
        handleButton(buttonValue);
    })
    
   })
})