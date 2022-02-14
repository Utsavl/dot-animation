console.log("dot javascript connected");

for (let i = 0; i<2000; i++){
    // console.log("started");
    ele = document.createElement("span")
    ele.classList.add("dots")

    let parent = document.getElementById("dotContainer");

    parent.appendChild(ele);

}