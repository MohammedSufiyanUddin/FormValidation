

console.log('form validation');

let name=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("phone");

let validatePhone= false;
let validateEmail= false;
let validateUser= false;



//console.log(name,email,phone);

name.addEventListener('blur', ()=>{
    console.log("name is blurred");

    //validation
    let regex =/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str =name.value;
    console.log(regex, str);

    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validateUser=true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validateUser=false;

    }
   
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");

    //validation for email
    let regex1=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str1=email.value;
    console.log(regex1, str1);

    if(regex1.test(str1)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validateEmail=true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validateEmail=false;
    }

})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");

    //validation for mail
    let regex2=/^([0-9]){10}$/;
    let str2=phone.value;
    console.log(regex2, str2);

    if(regex2.test(str2)){
        console.log('Your mobile No. is valid');
        phone.classList.remove('is-invalid');
        validatePhone=true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validatePhone=false;
    }
})

let submit=document.getElementById("submit");
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('i have clicked submit button');
    console.log(validateEmail, validatePhone, validateUser)

    if(validateEmail && validatePhone && validateUser){
        console.log('phone, email and user is valid form submiting');
        let success=document.getElementById('success');
        success.classList.add('show');
       // let failure=document.getElementById('failure');
        //failure.classList.remove('show'); 
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('not valid form not submit');
        let failure=document.getElementById('failure');
        failure.classList.add('show'); 
        //let success=document.getElementById('success');
        //success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();

    }

    
})