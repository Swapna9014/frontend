function average(){
    var n1=eval(document.getElementById('id1').value )
    var n2=eval(document.getElementById('id2').value )
    var n3=eval(document.getElementById('id3').value )
    var result=(n1+n2+n3)/3
    alert(result)

}
function eraseData(){
    document.getElementById('id1').value = ""
    document.getElementById('id2').value = ""
    document.getElementById('id3').value = ""

} 
