const btn = document.querySelector('button');


function btn_func(){
    const input = document.querySelectorAll('.child_cont input')
    for(let x of input){
        if(x.type="radio"){
            if(x.checked){
                document.getElementById('span_el').innerHTML='5'
            }
        }
    }
}

    

/*

nction radio_val(){
    var z = document.querySelectorAll('.form1 input');
    for(let x=0;x<z.length;x+=1){
       if(z[x].type='radio'){
        if(z[x].checked){
            console.log(x);
            document.getElementById('div1').innerHTML+=z[x].name+' value :'+z[x].value+'<br>'
        }
       }
    }
    
}

*/