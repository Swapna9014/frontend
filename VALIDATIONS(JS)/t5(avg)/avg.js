function average(){
    var n1=document.getElementById('id1').value 
    if(n1 == ""){

   
        //alert( 'n1 should not be empty')
        document.getElementById('div1').innerHTML='* n1 should not be empty'
        //document.getElementById('span1').innerHTML='* n1 should not be empty'
       return false
    }
    var n2=document.getElementById('id2').value 
    if(n2 == ""){
        //alert('n2 should not be null')
        document.getElementById('div1').innerHTML='* n2 should not be empty'
        //document.getElementById('span2').innerHTML='* n2 should not be empty'
        return false
    }
    var n3=document.getElementById('id3').value 
    if(n3 == ""){
        //alert('n3 should not be null')
        document.getElementById('div1').innerHTML='* n3 should not be empty'
        //document.getElementById('span3').innerHTML='* n3 should not be empty'
        return false
    }
    else{
    var result=(eval(n1)+eval(n2)+eval(n3))/3
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
