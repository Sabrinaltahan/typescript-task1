// Define the CourseInfo interface
interface CourseInfo {
code: string;
name: string;
progression: 'A' | 'B' | 'C';
syllabus: string;
}

// Initialize courses array from localStorage or empty array
const courses: CourseInfo[] = JSON.parse(localStorage.getItem('courses') || '[]');

// Helper function to save courses to localStorage
function saveCourses() {
localStorage.setItem('courses', JSON.stringify(courses));
}

// Function to display courses on the webpage
function displayCourses() {
const courseList = document.getElementById('course-list') as HTMLUListElement;
courseList.innerHTML = ''; // Clear existing content

courses.forEach((course) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span>${course.code} - ${course.name} (${course.progression})</span>
    <a href="${course.syllabus}" target="_blank">View Syllabus</a>
    `;
    courseList.appendChild(listItem);
});
}

// Function to add a new course
function addCourse(course: CourseInfo) {
// Check if course code already exists
if (courses.some(c => c.code === course.code)) {
    alert('Course code must be unique.');
    return;
}

// Add new course to courses array
courses.push(course);
saveCourses(); // Save to localStorage
displayCourses(); // Update the course list
}

// Event listener for form submission
const courseForm = document.getElementById('course-form') as HTMLFormElement;
courseForm.addEventListener('submit', (event: Event) => {
event.preventDefault();

// Get form values
const code = (document.getElementById('code') as HTMLInputElement).value;
const name = (document.getElementById('name') as HTMLInputElement).value;
const progression = (document.getElementById('progression') as HTMLSelectElement).value as 'A' | 'B' | 'C';
const syllabus = (document.getElementById('syllabus') as HTMLInputElement).value;

// Simple validation for progression
if (!['A', 'B', 'C'].includes(progression)) {
    alert('Invalid progression value. Please select A, B, or C.');
    return;
}

// Create a new course object
const newCourse: CourseInfo = {
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
