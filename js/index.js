let a;
do{

        a=prompt('Введи дело')
        console.log(a)
    if(a){
        let z = document.createElement("li")
        z.textContent=a
        document.getElementById('list').append(z)
    }
    }while(a)