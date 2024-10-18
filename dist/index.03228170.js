const e=JSON.parse(localStorage.getItem("courses")||"[]");function t(){let t=document.getElementById("course-list");t.innerHTML="",e.forEach(e=>{let n=document.createElement("li");n.innerHTML=`
    <span>${e.code} - ${e.name} (${e.progression})</span>
    <a href="${e.syllabus}" target="_blank">View Syllabus</a>
    `,t.appendChild(n)})}const n=document.getElementById("course-form");n.addEventListener("submit",l=>{l.preventDefault();let o=document.getElementById("code").value,s=document.getElementById("name").value,r=document.getElementById("progression").value,u=document.getElementById("syllabus").value;if(!["A","B","C"].includes(r)){alert("Invalid progression value. Please select A, B, or C.");return}(function(n){if(e.some(e=>e.code===n.code)){alert("Course code must be unique.");return}e.push(n),localStorage.setItem("courses",JSON.stringify(e)),t()})({code:o,name:s,progression:r,syllabus:u}),n.reset()}),t();
//# sourceMappingURL=index.03228170.js.map
