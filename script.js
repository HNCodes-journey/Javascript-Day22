//Closure ->  Aisa fnc jo return kare ek fnc , aur return hone wala fnction hamesha parent ka koi variable use kre
function abcd(){
    let a = 12;
    return function(){
        console.log(a);
    }
}


// Immediately invoke function
(function(){
    console.log("hey");
}) 
();