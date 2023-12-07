function square(){
    var a=document.getElementById('id1').value 
    if(a == ""){

   
        //alert( 'a should not be empty')
        document.getElementById('div1').innerHTML='* a should not be empty'
        //document.getElementById('span1').innerHTML='* a should not be empty'
       return false
    }
    var b=document.getElementById('id2').value 
    if(b == ""){
        //alert('b should not be null')
        document.getElementById('div1').innerHTML='* b should not be empty'
        //document.getElementById('span2').innerHTML='* b should not be empty'
        return false
    }
    else{
    var result=eval(a)*eval(a)+eval(b)*eval(b)+2*eval(a)*eval(b)
    alert(result)
   
     return true
    }

}
function erasedata(){
    var result = confirm("are you sure to delete")
    if (result == true){
    return true
    }
    else{
        return false
    }
} 
