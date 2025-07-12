<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fetch Card Example</title>
  <style>
    .card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 15px;
      margin: 20px auto;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
    }
    .card h3 {
      margin-top: 0;
      font-size: 20px;
      color: #333;
    }
    .card p {
      font-size: 16px;
      color: #555;
    }
  </style>
</head>
<body>
      <div id="card"> </div>
      <button id="btn" onclick="displaycard()">displaycard</button>
      <br>
      <input type="text" id="title">
      <input type="text" id="body">
      <input type="text" id="id">
      <button id="btn2" onclick="fetchcard()">fetchcard</button>

  <script>

      function displaycard(){
          let x;
          do{
              x=prompt("Enter a number");
          }while(!x);
          for(i=1;i<=Number(x);i++){
              fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
                  .then(response => response.json())
                  .then(data => {
                      const card = document.createElement('div');
                      card.className='card';
                      card.innerHTML=`<h2>${data.id}</h2>
    <h3>${data.title}</h3>
          <p>${data.body}</p>`;
                      document.getElementById('card').appendChild(card);
                      let br=document.createElement('br');
                      document.getElementById('card').appendChild('br');
                  })
                  .catch(err => console.error(err));

          }
      }
      function fetchcard() {
          fetch("https://jsonplaceholder.typicode.com/posts", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  title:document.getElementById("title").value,
                  body:document.getElementById("body").value,
                  id:document.getElementById("id").value
              })

          },{

          })
              .then(response => response.json())
              .catch(err => console.error(err));
      }
  </script>

     <!-- <script src="day3.js"></script> -->

</body>
</html>
