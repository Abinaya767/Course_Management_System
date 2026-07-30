// ================= STUDENT LOGIN =================


const studentForm = document.getElementById("studentLoginForm");


studentForm.addEventListener("submit", function(e){


    e.preventDefault();



    const studentId =
    document.getElementById("studentId").value.trim();



    const password =
    document.getElementById("studentPassword").value.trim();




    let students =
    JSON.parse(localStorage.getItem("students")) || [];




    // Check ID exists


    let student =
    students.find(function(user){

        return user.id === studentId;

    });




    if(!student){


        alert(
        "Student ID does not exist.\nPlease register first."
        );


        return;


    }




    // Check password


    if(student.password !== password){


        alert(
        "Incorrect Password.\nPlease enter registered password."
        );


        return;


    }




    // Login success


    alert("Login Successful!");


    window.location.href="course.html";



});









// ================= ADMIN LOGIN =================



const adminForm = document.getElementById("adminLoginForm");



adminForm.addEventListener("submit", function(e){


    e.preventDefault();




    const adminId =
    document.getElementById("adminId").value.trim();



    const password =
    document.getElementById("adminPassword").value.trim();




    let admins =
    JSON.parse(localStorage.getItem("admins")) || [];





    let admin =
    admins.find(function(user){


        return user.id === adminId;


    });





    if(!admin){


        alert(
        "Admin ID does not exist.\nPlease register first."
        );


        return;


    }




    if(admin.password !== password){


        alert(
        "Incorrect Password."
        );


        return;


    }




    alert("Admin Login Successful!");



    window.location.href="dashboard.html";



});