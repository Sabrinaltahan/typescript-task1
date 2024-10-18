Your task is to create a simple web application to manage courses, with course code, course name, progression and link (url) to course plan. The application will use TypeScript to organize and manage course information. Additionally, localStorage will be used to store course data between sessions, and DOM manipulation will be used to display and update the course information on the web page.

All code must follow code TypeScript syntax with "typed" variables, return values, etc.

Git must be used for version management of the code. The finished website must be published on a publicly accessible web host.

Mandatory functionality
The application must contain the following functionality:

Course information:
Create a TypeScript interface CourseInfo to define the structure of the course information. The course must contain the following fields:

code (course code)
name (course name)
progression (progression, limited to 'A', 'B' or 'C')
syllabus (URL to syllabus)
localStorage:
Use localStorage to save and retrieve the course information. When the page loads, the application should attempt to retrieve saved course information from localStorage.

Course Management Functions:
Create functions to add a new course, display information about a course and update information about an existing course. The functions must update both the course list and localStorage.

Website:
Create a website that displays a list of the courses, as well as the ability to add and update information about the courses.
Use DOM manipulation to update the web page when course information changes.
Use simple validation to check that the course code is unique, and that the course progression is correct.
The website must be reasonably neat and tidy and work well on large and small screens with good responsive design.

To ensure code is robust and maintainable, we require you to use TypeScript hard typing throughout your application. This means that you clearly define types for all variables, parameters and return values ​​in your code.


-------------
npm install
tsc
npm run build
npm run start