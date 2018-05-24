document.addEventListener('DOMContentLoaded', function(event){
    
    const validation = (id, regEx) => {
        document.getElementById(`${id}`).addEventListener('keypress', function(e){
            let value = e.target.value;
            if(regEx.test(value)){
                e.target.setCustomValidity('');
                e.target.classList.remove('invalid');
            }else{
                e.target.setCustomValidity('Invalid input field');
            }
        });
    } 
    const patterns = [
        {
            name: 'full_name',
            pattern: /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/ 
        },
        {
            name:'phone',
            pattern:/\d{5,13}/
        },
        {
            name:'address',
            pattern:/[A-Za-z0-9'\.\-\s\,]/
        },
        {
            name:'city',
            pattern:/^([A-Z][a-z]*)(\s[A-Z][a-z]*)*$/
        },
        {
            name:'state',
            pattern:/^([A-Z][a-z]*)(\s[A-Z][a-z]*)*$/
        },
        {
            name:'country',
            pattern:/^([A-Z][a-z]*)(\s[A-Z][a-z]*)*$/
        },
        {
            name:'zipCode',
            pattern:/\d{5,7}/
        },

    ];
      const valitity =  patterns.forEach(el=>{
        validation(el.name, el.pattern);
    });
    //checking are e-mails the same
    const emailOne = document.getElementById('email');
    const emailTwo = document.getElementById('emailAgain');
    let value = '';
    emailOne.addEventListener('keypress', function(e){
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        value = e.target.value;
        if(regEx.test(value)){
            e.target.setCustomValidity('');
            e.target.classList.remove('invalid');
        }else{
            e.target.setCustomValidity('Invalid e-mail address');
        }
    });
    emailTwo.addEventListener('keypress', function(e){
        if(value === e.target.value){
            e.target.setCustomValidity('');
            e.target.classList.remove('invalid');
        }else{
            e.target.setCustomValidity('Email does not match');
        }
    })
    const emailPatterns = [
        {
            name:'email',
            pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        {
            name:'emailAgain'
            // pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    ]
});