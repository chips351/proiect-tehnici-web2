function btnFunction(button) {
    var moreText = button.previousElementSibling.querySelector(".more");
    var pct = button.previousElementSibling.querySelector(".puncte");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; 
        pct.style.display = "none"; 
        button.innerText = "citeste mai putin";  
    } else {
        moreText.style.display = "none";  
        pct.style.display = "inline";  
        button.innerText = "citeste mai mult";  
    }
}
