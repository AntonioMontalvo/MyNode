console.log("I'm the school Builder");

//Here we make our AJAX call to the server to get the most current data about the school
$.get("http://localhost:3000/schoolPage/studentsPerGrade", function(data) {

    for (key in data) {
        var school = data[key];
        var grade = school.grade;
        var teacher = school.teacher;
        var alumni = school.student;

        for (var i = 0; i < alumni.length; i++) {

            $("#grade").append("<p>" + alumni[i].grade + " </br></p>");
            $("#first-name").append("<p>" + alumni[i].firstName + " </br></p>");
            $("#last-name").append("<p>" + alumni[i].lastName + " </br></p>");
            $("#father").append("<p>" + alumni[i].father + " </br></p>");
            $("#mother").append("<p>" + alumni[i].mother + " </br></p>");
            $("#teacher").append("<p>" + alumni[i].teacher + " </br></p>");
            $("#lunch").append("<p>" + alumni[i].lunch + " </br></p>");
            $("#carpool").append("<p>" + alumni[i].carpool + " </br></p>");

            console.log(alumni[i]);
        }

    }


});

//and here we capture the click event when the client submits the New Student form data
$('#add-new-student').on('click', function() {
    var newStudent = {
        firstname: $('#new-student-first-name').val().trim(),
        lastname: $('#new-student-last-name').val().trim(),
        father: $('#new-father').val().trim(),
        mother: $('#new-mother').val().trim(),
        grade: $('#gradeSelection').val().trim()
    };

    //
    $.post("http://localhost:3000/schoolPage/newStudent", newStudent)
        .done(function(data) {
        	$("#confirmed-name").text("");
            $("#confirmed-name").append(data.firstname + " " + data.lastname + " has been successfully enrolled in grade " + data.grade);
            console.log(data);
        });

    return false;
});