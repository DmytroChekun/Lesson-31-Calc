function insert(num){
    $(".display").val($(".display").val() + num);
}
    
function equal(){
    let exp = $(".display").val();
    if(exp){
    $(".display").val(eval(exp));
}
}

function reset(){
    $(".display").val("");
}