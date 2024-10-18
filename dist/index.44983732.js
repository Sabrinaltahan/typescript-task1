"use strict";
// Initialize courses array from localStorage or empty array
const courses = JSON.parse(localStorage.getItem("courses") || "[]");
// Helper function to save courses to localStorage
function saveCourses() {
    localStorage.setItem("courses", JSON.stringify(courses));
}
// Function to display courses on the webpage
function displayCourses() {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear existing content
    courses.forEach((course)=>{
        const listItem = document.createElement("li");
        listItem.innerHTML = `
    <span>${course.code} - ${course.name} (${course.progression})</span>
    <a href="${course.syllabus}" target="_blank">View Syllabus</a>
    `;
        courseList.appendChild(listItem);
    });
}
// Function to add a new course
function addCourse(course) {
    // Check if course code already exists
    if (courses.some((c)=>c.code === course.code)) {
        alert("Course code must be unique.");
        return;
    }
    // Add new course to courses array
    courses.push(course);
    saveCourses(); // Save to localStorage
    displayCourses(); // Update the course list
}
// Event listener for form submission
const courseForm = document.getElementById("course-form");
courseForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    // Get form values
    const code = document.getElementById("code").value;
    const name = document.getElementById("name").value;
    const progression = document.getElementById("progression").value;
    const syllabus = document.getElementById("syllabus").value;
    // Simple validation for progression
    if (![
        "A",
        "B",
        "C"
    ].includes(progression)) {
        alert("Invalid progression value. Please select A, B, or C.");
        return;
    }
    // Create a new course object
    const newCourse = {
        code,
        name,
        progression,
        syllabus
    };
    addCourse(newCourse);
    // Clear form fields after submission
    courseForm.reset();
});
// Display courses on page load
displayCourses();

//# sourceMappingURL=index.44983732.js.map
