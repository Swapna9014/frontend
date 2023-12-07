function cube(){
    var n=document.getElementById('id1').value 
    if(n == ""){

   
        //alert( 'n1 should not be empty')
        document.getElementById('div1').innerHTML='* n should not be empty'
        //document.getElementById('span1').innerHTML='* n should not be empty'
       return false
    }
  
    else{
    var result=eval(n)*eval(n)*eval(n)
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
