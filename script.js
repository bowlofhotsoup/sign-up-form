function passwordConfirmation(){
    const password = document.getElementById("pw").value;
    const confirmPassword = document.getElementById("confirm-pw").value;
    if(password !== confirmPassword){
        alert("Please make sure your passwords match.");
    }
}