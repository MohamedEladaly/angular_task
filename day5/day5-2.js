<html>

<head>
    <style>
        .center {
            text-align: center;
        }

    </style>
</head>

<body>
    <div class="center">
        <div id="header">

            <img src="dom.jpg" alt="hello..it rains over here:)" />
        </div>
        <div id="navigation">
            <ul id="nav">
                <li><strong>Memo</strong></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Photos</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>


    </div>
    <script>
        let parent = document.querySelector(".center");
        parent.style.position="relative";
        parent.style.height="100vh";
        let myimg=document.querySelector("#header img");
        myimg.style.position="absolute";
        myimg.style.top="20px";
        myimg.style.right="20px";
        myimg.style.width="200px";
        let mycolne=myimg.cloneNode(true);
        mycolne.style.position="absolute";
        mycolne.style.bottom="20px";
        mycolne.style.left="20px";
        mycolne.style.width="200px";
        parent.appendChild(mycolne);
        let ul = document.getElementById("nav");
        ul.style.listStyleType = "square";
        ul.style.listStylePosition = "inside";
        ul.style.display = "inline-block"; 
        ul.style.marginTop = "150px";
        ul.parentElement.style.textAlign = "center";
        
    </script>
</body>



</html>
