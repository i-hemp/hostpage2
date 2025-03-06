

// window.open("https://newpage.com", "_blank"); // Opens a new tab
// let executed = false;

// function runOnce() {
//   if (!executed) {
//     // Your statement to execute only once
//     console.log("This will run only once.");
//     window.location.href = ""; 
//     executed = true;

//   } else {
//     console.log("Statement already executed.");
//   }
// }
if (!sessionStorage.getItem("redirected")) {
  sessionStorage.setItem("redirected", "true");  
  window.location.href = "login_page.html";  
}


// Function to fetch and process the JSON data  
async function loadStudentData() {  
  try { // Folder4/data.json
    const response = await fetch('data.json'); // Relative path to data.json  
    if (!response.ok) {  
      throw new Error(`HTTP error! Status: ${response.status}`);  
    }  
    const studentData = await response.json();  
    displayStudentInfo(studentData);  
  } catch (error) {  
    console.error('Could not fetch or parse data:', error);  
    document.getElementById('studentInfo').textContent = 'Failed to load student data.';  
  }  
}  

// Function to display the student information on the page  
function displayStudentInfo(student) {  
  const studentInfoDiv = document.getElementById('studentInfo');  
  studentInfoDiv.innerHTML = `  
    <p><strong>First Name:</strong> ${student.student.firstName}</p>  
    <p><strong>Last Name:</strong> ${student.student.lastName}</p>  
    <p><strong>Age:</strong> ${student.student.age}</p>  
    <p><strong>Grade:</strong> ${student.student.grade}</p>  
  `;  
}  

// Call the function to load data when the script runs  
loadStudentData();  


//data.json 
// {  
//     "student": {  
//       "firstName": "Alex",  
//       "lastName": "Johnson",  
//       "age": 16,  
//       "grade": 10,  
//       "studentID": "12345",  
//       "contact": {  
//         "email": "alex.johnson@example.edu",  
//         "phone": "555-123-4567"  
//       },  
//       "academic": {  
//         "GPA": 3.8,  
//         "courses": [  
//           "English 10",  
//           "Algebra II",  
//           "Biology",  
//           "World History"  
//         ]  
//       },  
//       "extracurricular": [  
//         "Debate Club",  
//         "Varsity Soccer"  
//       ]  
//     }  
//   }  





// const data = {
//   student: {
//     firstName: "Alex",
//     lastName: "Johnson",
//     age: 16,
//     grade: 10,
//     studentID: "12345",
//     contact: {
//       email: "alex.johnson@example.edu",
//       phone: "555-123-4567",
//     },
//     academic: {
//       GPA: 3.8,
//       courses: ["English 10", "Algebra II", "Biology", "World History"],
//     },
//     extracurricular: ["Debate Club", "Varsity Soccer"],
//   },
// };
// function printData(data) {  
//   // Example: Printing the first name to the console  
//   console.log("First Name:", data.student.firstName);  

//   // Example: Displaying all student information in a div with id="output"  
//   let outputDiv = document.getElementById('output');  
//   if (outputDiv) {  
//     let studentInfo = `  
//       <p>First Name: ${data.student.firstName}</p>  
//       <p>Last Name: ${data.student.lastName}</p>  
//     `;  
//     outputDiv.innerHTML = studentInfo;  
//   } else {  
//     console.warn("Output div not found!");  
//   }  
// }  
// fetch('data.json')  
// .then(response => response.json()) // Parse the JSON  
// .then(data => {  
//   // 'data' now contains your JSON object  
//   printData(data); // Call a function to handle the data  
// })  
// .catch(error => console.error('Error fetching JSON:', error));  
// // for (const key in data) {
// //   console.log(data[key])
// //   if(typeof(data[key])===Array)
// // }
// // console.log(data);
