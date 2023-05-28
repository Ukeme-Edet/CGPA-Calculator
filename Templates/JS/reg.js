////////////////////////// post Register form data  //////////////////////////
const regForm = document.getElementById('regForm')


regForm.addEventListener('submit', async function(e){
    e.preventDefault();  // prevent the default property of a form to reload after submitting

    const formData = new FormData(this);

    await fetch('auth/register',{
    method:'POST',
    body:formData,
})
.then(res=>res.json())
.then(data =>{
    const message = data.message
    if( message == "successful"){
        swal({
             icon: "success",
             text: "Signup succesful",
             button: false,
            })
        setTimeout(() => {location.assign("/index") ; }, 1000);
    }else if (message == "unsuccessful"){
        swal({
             icon: "error",
             text: "There was an error during signup please try again",
             button: false,
            })
    }

    })

})