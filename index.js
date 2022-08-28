let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTml == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTml == 'C'){
            string= "";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTml;
            document.querySelector('input').value=string;
        }
    })
})