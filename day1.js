// function input_date() {
//     let Pattern = /^\d{2}-\d{2}-\d{4}$/;
//     let x;
//     let date;
//     do {
//         date = prompt("Enter a date");
//
//         x = Pattern.test(date)
//         if (!x) {
//             alert("Please enter a valid date");
//         }
//     } while (!x);
//     return date;
// }
// function dsplay_date(date) {
//     let day = date.slice(0, 2);
//     let month = date.slice(3, 5);
//     let year = date.slice(6);
//     let my_date = new Date(year, month, day);
//     alert("Your birth date is: " + my_date.toString());
// }
// dsplay_date(input_date());
//
// function input_user() {
//     let n_Users
//     do {
//
//         n_Users = Number(prompt("Enter number of users:"))
//         ;
//
//     } while (!n_Users);
//     return n_Users;
// }
// function add_user(n_Users) {
// let table=document.getElementById("t");
// for (let i = 0; i < n_Users; i++) {
//     let name;
//     let age;
//     do {
//         name = prompt("enter the name of user " + i + 1 + " ->length should be more than 3 and less than 10 characters ");
//     } while (!(name.length > 3 && name.length < 10));
//     do {
//         age = prompt("Enter the age of user" + i + 1 + " -> should be greater than 10 and less than 60:");
//     } while (!(Number(age) > 10 && Number(age) < 60));
//     let row = document.createElement("tr");
//     let col_name = document.createElement("td");
//     col_name.textContent = name;
//     let col_age = document.createElement("td");
//     col_age.textContent = age;
//     row.appendChild(col_name);
//     row.appendChild(col_age);
//     table.appendChild(row);
// }
//
// }
// add_user(input_user());
