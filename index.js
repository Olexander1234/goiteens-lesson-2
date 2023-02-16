console.log('До сеттаймаут');
setTimeout(()=>{
    console.log('Виконання фунції з відкладеним викликом');
}, 100)

for (let i = 0; i < 100000; i+=1) {
   console.log(i);
    
}
console.log('після ');