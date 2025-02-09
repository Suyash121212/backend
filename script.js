function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function check(val){
    if(val>0){
        return "positive";
    }
    else{
        return "negative";  
    }
}
module.exports = {
    add,
    sub ,
    checkpositive :check
}
 