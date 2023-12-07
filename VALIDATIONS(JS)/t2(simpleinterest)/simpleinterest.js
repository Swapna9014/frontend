function simpleinterest(){
    var p=document.getElementById('id1').value 
    if(p == ""){

   
        //alert( 'p should not be empty')
        document.getElementById('div1').innerHTML='* p should not be empty'
        //document.getElementById('span1').innerHTML='* np should not be empty'
       return false
    }
    var t=document.getElementById('id2').value 
    if(t == ""){
        //alert('t should not be null')
        document.getElementById('div1').innerHTML='* t should not be empty'
        //document.getElementById('span2').innerHTML='* t should not be empty'
        return false
    }
    var r=document.getElementById('id3').value 
    if(r == ""){
        //alert('t should not be null')
        document.getElementById('div1').innerHTML='* r should not be empty'
        //document.getElementById('span3').innerHTML='* r should not be empty'
        return false
    }
    
    else{
    var result=eval(p)*eval(t)*eval(r)/100
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
