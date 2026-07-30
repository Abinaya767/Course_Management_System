// ================= FORM ELEMENT =================

const form = document.getElementById("forgotForm");


// ================= RESET PASSWORD =================

form.addEventListener("submit", function(e){

    e.preventDefault();


    const accountType =
    document.getElementById("accountType").value;


    const userId =
    document.getElementById("userId").value.trim();


    const newPassword =
    document.getElementById("newPassword").value;


    const confirmPassword =
    document.getElementById("confirmPassword").value;



    // Account type validation

    if(accountType === ""){

        alert("Please select account type.");

        return;

    }



    // ID validation

    if(userId === ""){

        alert("Please enter your registered ID.");

        return;

    }



    // Password validation

    if(newPassword.length < 6){

        alert("Password must contain minimum 6 characters.");

        return;

    }



    if(newPassword !== confirmPassword){

        alert("Passwords do not match.");

        return;

    }





    // ================= STUDENT PASSWORD RESET =================


    if(accountType === "student"){


        let students =
        JSON.parse(localStorage.getItem("students")) || [];



        let student =
        students.find(function(user){


            return user.id === userId;


        });




        if(student){


            student.password = newPassword;



            localStorage.setItem(
                "students",
                JSON.stringify(students)
            );



            alert(
                "Password reset successful!\n\nYou can login with your new password."
            );



            window.location.href="login.html";


        }

        else{


            alert(
                "Student ID not found. Please register first."
            );


        }



    }







    // ================= ADMIN PASSWORD RESET =================


    if(accountType === "admin"){


        let admins =
        JSON.parse(localStorage.getItem("admins")) || [];




        let admin =
        admins.find(function(user){


            return user.id === userId;


        });





        if(admin){


            admin.password = newPassword;




            localStorage.setItem(
                "admins",
                JSON.stringify(admins)
            );




            alert(
                "Admin password reset successful!\n\nYou can login with your new password."
            );




            window.location.href="login.html";


        }

        else{


            alert(
                "Admin ID not found. Please register first."
            );


        }



    }



});