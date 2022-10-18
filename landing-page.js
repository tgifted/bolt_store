const openBtn = document.getElementById('open-btn');
const getStarted = document.getElementById('Get-started');


// add addEventListener for Get-started btn

openBtn.addEventListener('click', function(){
    getStarted.style.display = 'block'
})


// form validation
function validate (){

    
const uname = document.getElementById('uname').value;
const pword = document.getElementById('pword').value;
    
   
    if(uname.trim() == "" || pword.trim() == "" ){
        alert("missing credentials");
        return false;
    }

    else if(uname.value.length > 0 && pword.value.length > 3){
        alert("sign-up successful")
        return true;
    }
    else{
        alert('wrong details')
        return false;
    }
    
}