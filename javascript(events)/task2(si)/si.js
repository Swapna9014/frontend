function simpleinterest(){
    var p=eval(document.getElementById('id1').value )
    var t=eval(document.getElementById('id2').value )
    var r=eval(document.getElementById('id3').value )
    var result= (p*t**r)/100
    alert(result)

}
function eraseData(){
    document.getElementById('id1').value = ""
    document.getElementById('id2').value = ""
    document.getElementById('id3').value = ""


} 
