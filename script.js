document.getElementById("submit").addEventListener("click", function () {
    let isValid = true;



    let name = document.getElementById("name").value.trim();
    let namef= document.getElementById("name")
    let nameer= document.getElementById("nameError")
    if(name.length == 0){
        nameer.textContent = "Enter your full name.";
        nameer.style.color = "red";
        namef.style.border = "2px solid red";
        isValid = false;
    }
    else if (name.length < 5 || name.length > 50) {
       nameer.textContent = "Name must be between 5 and 50 characters.";
        nameer.style.color = "red";
        namef.style.border = "2px solid red";
        isValid = false;
    } 
    else {
        document.getElementById("nameError").textContent = "";
        namef.style.border = "";
    }

    
    
    let email = document.getElementById("email").value.trim();
    let emailf= document.getElementById("email");
    let emailer= document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@pilani\.bits-pilani\.ac\.in$/;
    if (!emailPattern.test(email)) {
        emailer.textContent = "Enter a valid BITS email.";
        emailer.style.color = "red";
        isValid = false;
        emailf.style.border = "2px solid red";
    } else {
        document.getElementById("emailError").textContent = "";
        emailf.style.border = "";
    }
     


    let submittedEmails = JSON.parse(localStorage.getItem("submittedEmails")) || [];
     if (submittedEmails.includes(email)) {
         emailer.textContent = "This email has already been used for submission.";
         emailf.style.border = "2px solid red";
         isValid = false;
     }

    
     
    let phone = document.getElementById("phone").value.trim();
    let phonef = document.getElementById("phone");
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
       let phoneer= document.getElementById("phoneError")
       phoneer.textContent = "Phone number must be exactly 10 digits.";
        phoneer.style.color = "red";
        phonef.style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
        phonef.style.border = "";
    }

   
    
    let bitsId = document.getElementById("bitsId").value.trim();
    let idf= document.getElementById("bitsId");
    if (bitsId === "") {
       let ider= document.getElementById("bitsIdError")
       ider.textContent = "BITS ID is required.";
        ider.style.color = "red";
        idf.style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("bitsIdError").textContent = "";
        idf.style.border = "";
    }

    
    
    let hostel = document.getElementById("hostel").value;
    let hostelf = document.getElementById("hostel");
    if (hostel === "") {
        let hosteler= document.getElementById("hostelError")
        hosteler.textContent = "Please select your hostel.";
        hosteler.style.color = "red";
        hostelf.style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("hostelError").textContent = "";
        hostelf.style.border = "";
    }

    let merch= document.getElementById("merch").value;
    let merchf = document.getElementById("merch");
    if(merch === ""){
        let mercher = document.getElementById("itemError");
        mercher.textContent = "Please select item";
        mercher.style.color = "red";
        merchf.style.border = "2px solid red";
        isValid = false;
    }
    else{
        document.getElementById("itemError").textContent = "";
        merchf.style.border = "";
    }

    
    
    let sizeSelected = document.querySelector('input[name="size"]:checked');
    if (!sizeSelected) {
        let sizeer= document.getElementById("sizeError")
        sizeer.textContent = "Please select a size.";
        sizeer.style.color = "red";
        isValid = false;
    } 
    else {
        document.getElementById("sizeError").textContent = "";
    }

   
    
    let terms = document.getElementById("terms").checked;
    if (!terms) {
       let tnc=  document.getElementById("termsError")
       tnc.textContent = "You must agree to the terms.";
        tnc.style.color = "red";
        isValid = false;
    } else {
        document.getElementById("termsError").textContent = "";
    }

   
    
    if (isValid) {
        submittedEmails.push(email);
    localStorage.setItem("submittedEmails", JSON.stringify(submittedEmails));
        alert("Form submitted successfully!");
    }
});



document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("bitsId").value = "";
    document.getElementById("hostel").value = "";
    document.getElementById("merch").value = "";
    document.querySelectorAll('input[name="size"]').forEach(el => el.checked = false);
    document.getElementById("terms").checked = false;

    
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    document.querySelectorAll("input, select").forEach(el => el.style.border = "");
});


