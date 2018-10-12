function verif(){
  var password = document.getElementById('password').value
  var confirmpassword = document.getElementById('confirmPassword').value
  if (password == "" || confirmPassword == ""){
  //   document.getElementById('password').style.border='solid 2px red';
  // document.getElementById('confirmPassword').style.border='solid 2px red';
  alert('le champs')
}else if (password === confirmPassword){
    document.getElementById('password').style.border='solid 2px green';
    document.getElementById('confirmPassword').style.border='solid 2px green';
}else{
    document.getElementById('password').style.border='solid 2px red';
  document.getElementById('confirmPassword').style.border='solid 2px red';
}
}
