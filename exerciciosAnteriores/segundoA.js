console.log("1");
t();
console.log("2");
function t(){
    setTimeout(() => {
        console.log("3");  
    }, 1000);
}