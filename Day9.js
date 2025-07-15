const http = require("http");

let users = [
    { id: 1, name: "mohamed" },
    { id: 2, name: "ahmed" },
];

let posts = [
    { id: 1, u_id: 1, text: "hello" },
    { id: 2, u_id: 2, text: "hi" },
];

const server = http.createServer((req, res) => {
    if (req.url === "/user" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(users));
    }

    else if (req.url === "/user" && req.method === "POST") {
        req.on("data", (chunk) => {
            let newUser = JSON.parse(chunk);
            let check = users.find((u) => u.id == newUser.id);
            if (!check) {
                users.push(newUser);
                res.setHeader("Content-Type", "text/plain");
                res.end("User added");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end("user already exists");
            }
        });
    }

    else if (req.url === "/user" && req.method === "PUT") {
        req.on("data", (chunk) => {
            let updatedUser = JSON.parse(chunk);
            let index = users.findIndex((u) => u.id == updatedUser.id);
            if (index !== -1) {
                users[index] = { ...users[index], ...updatedUser };
                res.setHeader("Content-Type", "text/plain");
                res.end("User updated");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end("user not found");
            }
        });
    }

    else if (req.url === "/user" && req.method === "DELETE") {
        req.on("data", (chunk) => {
            let { id } = JSON.parse(chunk);
            let index = users.findIndex((u) => u.id == id);
            if (index !== -1) {
                users = users.filter((u) => u.id != id);
                res.setHeader("Content-Type", "text/plain");
                res.end("user deleted");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end("ERROR: User not found");
            }
        });
    }

    else if (req.url === "/post" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(posts));
    }

    else if (req.url === "/post" && req.method === "POST") {
        req.on("data", (chunk) => {
            let newPost = JSON.parse(chunk);
            let check = posts.find((p) => p.id == newPost.id);
            if (!check) {
                posts.push(newPost);
                res.setHeader("Content-Type", "text/plain");
                res.end("post added");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end(" Post already exists");
            }
        });
    }

    else if (req.url === "/post" && req.method === "PUT") {
        req.on("data", (chunk) => {
            let updatedPost = JSON.parse(chunk);
            let index = posts.findIndex((p) => p.id == updatedPost.id);
            if (index !== -1) {
                posts[index] = { ...posts[index], ...updatedPost };
                res.setHeader("Content-Type", "text/plain");
                res.end("post updated");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end("ERROR: Post not found");
            }
        });
    }
    else if (req.url === "/post" && req.method === "DELETE") {
        req.on("data", (chunk) => {
            let { id } = JSON.parse(chunk);
            let index = posts.findIndex((p) => p.id == id);
            if (index !== -1) {
                posts.splice(index, 1);
                res.setHeader("Content-Type", "text/plain");
                res.end("post deleted");
            } else {
                res.setHeader("Content-Type", "text/plain");
                res.end(" Post not found");
            }
        });
    }
    else {
        res.statusCode = 404;
        res.end("Route Not Found");
    }
});
server.listen(3002, () => {
    console.log("Server running on http://localhost:3002");
});
