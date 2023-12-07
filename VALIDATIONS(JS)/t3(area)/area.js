function area(){
    var r=document.getElementById('id1').value 
    if(r == ""){

   
        //alert( 'r should not be empty')
        document.getElementById('div1').innerHTML='* r should not be empty'
        //document.getElementById('span1').innerHTML='* r should not be empty'
       return false
    }
    
    else{
    var result=3.14*eval(r)*eval(r)
    alert(result)
   
     return true
    }

}
function erasedata(){
    var result = confirm("Are you sure to delete")
    if (result == true){
    return true
    }
    else{
        return false
    }
} 
