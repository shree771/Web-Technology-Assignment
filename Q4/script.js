// =====================================================
// STUDENT GRADE CALCULATOR
// =====================================================


// =====================================================
// CALCULATE FUNCTION
// =====================================================

function calculate() {


    // =================================================
    // GET STUDENT NAME
    // =================================================

    let studentName =
        document.getElementById("studentName").value.trim();


    // =================================================
    // GET SUBJECT MARKS
    // =================================================

    let a =
        Number(
            document.getElementById("m1").value
        );

    let b =
        Number(
            document.getElementById("m2").value
        );

    let c =
        Number(
            document.getElementById("m3").value
        );

    let d =
        Number(
            document.getElementById("m4").value
        );

    let e =
        Number(
            document.getElementById("m5").value
        );


    // =================================================
    // CHECK STUDENT NAME
    // =================================================

    if (studentName === "") {

        document.getElementById("result").innerHTML =
            "<strong>Please enter the student name.</strong>";

        return;

    }


    // =================================================
    // CHECK ALL MARKS ARE ENTERED
    // =================================================

    if (
        document.getElementById("m1").value === "" ||
        document.getElementById("m2").value === "" ||
        document.getElementById("m3").value === "" ||
        document.getElementById("m4").value === "" ||
        document.getElementById("m5").value === ""
    ) {

        document.getElementById("result").innerHTML =
            "<strong>Please enter marks for all five subjects.</strong>";

        return;

    }


    // =================================================
    // VALIDATE MARKS
    // =================================================

    if (
        a < 0 || a > 100 ||
        b < 0 || b > 100 ||
        c < 0 || c > 100 ||
        d < 0 || d > 100 ||
        e < 0 || e > 100
    ) {

        document.getElementById("result").innerHTML =
            "<strong>Please enter marks between 0 and 100.</strong>";

        return;

    }


    // =================================================
    // CALCULATE TOTAL
    // =================================================

    let total =
        a + b + c + d + e;


    // =================================================
    // CALCULATE AVERAGE
    // =================================================

    let average =
        total / 5;


    // =================================================
    // DETERMINE GRADE
    // =================================================

    let grade;


    if (average >= 90) {

        grade = "A+";

    }

    else if (average >= 80) {

        grade = "A";

    }

    else if (average >= 70) {

        grade = "B";

    }

    else if (average >= 60) {

        grade = "C";

    }

    else {

        grade = "F";

    }


    // =================================================
    // DETERMINE PASS OR FAIL
    // =================================================

    let status;


    if (
        a >= 40 &&
        b >= 40 &&
        c >= 40 &&
        d >= 40 &&
        e >= 40
    ) {

        status = "PASS";

    }

    else {

        status = "FAIL";

    }


    // =================================================
    // APPLY STATUS CLASS
    // =================================================

    let statusClass;

    if (status === "PASS") {

        statusClass = "pass";

    }

    else {

        statusClass = "fail";

    }


    // =================================================
    // DISPLAY RESULT
    // =================================================

    document.getElementById("result").innerHTML =

        "<h3>Student Result</h3>" +

        "<strong>Student Name:</strong> " +
        studentName +
        "<br>" +

        "<strong>Total Marks:</strong> " +
        total +
        " / 500" +
        "<br>" +

        "<strong>Average:</strong> " +
        average.toFixed(2) +
        "<br>" +

        "<strong>Grade:</strong> " +
        grade +
        "<br>" +

        "<strong>Status:</strong> " +

        "<span class='" +
        statusClass +
        "'>" +
        status +
        "</span>";

}


// =====================================================
// RESET FUNCTION
// =====================================================

function resetForm() {


    // Clear student name

    document.getElementById("studentName").value = "";


    // Clear subject marks

    document.getElementById("m1").value = "";

    document.getElementById("m2").value = "";

    document.getElementById("m3").value = "";

    document.getElementById("m4").value = "";

    document.getElementById("m5").value = "";


    // Reset result area

    document.getElementById("result").innerHTML =

        "<p>Enter details and click " +
        "<strong>Calculate</strong>.</p>";

}