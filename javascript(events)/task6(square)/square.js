function square(){
    var a=eval(document.getElementById('id1').value )
    var b=eval(document.getElementById('id2').value )
    var result=a*a+b*b+2*a*b
    alert(result)

}
function eraseData(){
    document.getElementById('id1').value = ""
    document.getElementById('id2').value = ""

} 
