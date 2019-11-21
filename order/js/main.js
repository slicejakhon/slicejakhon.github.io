function thirdTask() {
    var number=document.getElementById('son3').value;
    var count=0;
    for(var i=1; i<=number; i++){
        if(number % i==0){
            count++
        }
    }
    if(count ==2){
        document.getElementById('natija').innerText="Prime number"
    } else{
        document.getElementById('natija').innerText="Not prime number"
    }
}