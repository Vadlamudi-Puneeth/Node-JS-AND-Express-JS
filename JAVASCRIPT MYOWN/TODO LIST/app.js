
let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

button.addEventListener('click', function(){
    
    let list = document.createElement('li');
    list.innerText = input.value;
    input.value="";
    ul.append(list);

    let btn = document.createElement('button');
    btn.innerText = "delete";
    list.append(btn);

    btn.addEventListener('click', function(){
        list.remove();
    })

})

let btns = document.querySelectorAll('.delete');

for(btn of btns){
    btn.addEventListener('click',function(){
        let par = this.parentElement;
        par.remove();
        console.log(par);



    })
}




