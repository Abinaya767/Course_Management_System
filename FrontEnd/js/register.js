// ================= ELEMENTS =================

const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const checkbox = document.getElementById("agree");
const registerBtn = document.getElementById("registerBtn");

// ================= ENABLE BUTTON =================

checkbox.addEventListener("change", function () {
    registerBtn.disabled = !this.checked;
});

// ================= REGISTER =================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Name Validation
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (name.length < 3) {
        alert("Name must contain at least 3 characters.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password Validation
    if (password === "") {
        alert("Please enter a password.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (confirmPassword === "") {
        alert("Please confirm your password.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!checkbox.checked) {
        alert("Please accept the Terms & Conditions.");
        return;
    }

    // ================= GET EXISTING STUDENTS =================

    let students = JSON.parse(localStorage.getItem("students")) || [];

    // ================= CHECK EMAIL =================

    const emailExists = students.find(student => student.email === email);

    if (emailExists) {
        alert("This email is already registered.");
        return;
    }

    // ================= GENERATE STUDENT ID =================

    const studentId = "STU" + String(students.length + 1).padStart(3, "0");

    // ================= SAVE STUDENT =================

    const student = {

        id: studentId,
        name: name,
        email: email,
        password: password

    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    // ================= SUCCESS POPUP =================

    alert(
        "🎉 Registration Successful!\n\n" +
        "Student ID : " + studentId +
        "\n\nPlease save this ID.\n\n" +
        "Use this Student ID and Password to login."
    );

    // ================= RESET FORM =================

    form.reset();

    registerBtn.disabled = true;

    // ================= REDIRECT =================

    window.location.href = "login.html";

});