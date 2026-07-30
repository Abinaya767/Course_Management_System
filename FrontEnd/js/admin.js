// ================= ELEMENTS =================

const form = document.getElementById("adminRegisterForm");

const checkbox = document.getElementById("agree");

const message = document.querySelector(".message");



// ================= ADMIN REGISTER =================


form.addEventListener("submit", function(e){


    e.preventDefault();



    const name =
    document.getElementById("name").value.trim();



    const email =
    document.getElementById("email").value.trim();



    const password =
    document.getElementById("password").value;



    const confirmPassword =
    document.getElementById("confirmPassword").value;




    // Name validation

    if(name === ""){

        alert("Please enter Admin Name.");

        return;

    }



    if(name.length < 3){

        alert("Admin Name must contain minimum 3 characters.");

        return;

    }





    // Email validation

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!emailPattern.test(email)){


        alert("Please enter valid email address.");

        return;

    }





    // Password validation


    if(password === ""){


        alert("Please enter password.");

        return;

    }



    if(password.length < 6){


        alert("Password must contain minimum 6 characters.");

        return;

    }





    // Confirm password


    if(password !== confirmPassword){


        alert("Passwords do not match.");

        return;

    }





    // Terms


    if(!checkbox.checked){


        alert("Please accept Terms & Conditions.");

        return;

    }





    // Get existing admins


    let admins =
    JSON.parse(localStorage.getItem("admins")) || [];





    // Check email already exists


    let existingAdmin =
    admins.find(function(admin){


        return admin.email === email;


    });




    if(existingAdmin){


        alert("This email is already registered.");

        return;


    }





    // Generate Admin ID


    const adminId =
    "ADM" + String(admins.length + 1).padStart(3,"0");





    // Create admin object


    const admin = {


        id: adminId,

        name:name,

        email:email,

        password:password


    };





    // Save admin


    admins.push(admin);



    localStorage.setItem(
        "admins",
        JSON.stringify(admins)
    );





    // Success popup


    alert(

        "🎉 Admin Registration Successful!\n\n" +

        "Admin ID : " + adminId +

        "\n\nPlease save this ID.\n\n" +

        "Use this Admin ID and Password to login."

    );





    // Go to login page


    window.location.href="login.html";



});