let button = document.querySelector(".post-button");

function post(postedContent, postContents) {
    postedContent.className = ".post";
    postedContent.innerHTML = `<div class='post'> <p>${postContents}</p> </div>`;
    document.body.append(postedContent);
};

button.addEventListener("click", () => {
    let text = document.querySelector("#post").value;
    let userPost = document.createElement("div");
    
    if(text === "") {
        alert('Post must contain text');
    }
    else {
        post(userPost, text);
    }
});