
var data = [
    { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/devanshu-masodker-624782227/", text: "LinkedIn"},
    { icon: "fa-brands fa-github", url: "https://github.com/Devanshumasodker", text: "GitHub"},
    { icon: "fa-brands fa-twitter", url: "https://twitter.com/DevanshuMehra29?t=yie5Ef4Yw1RKX3HFpYwurg&s=09" , text: "Twitter"},
    { icon: "fa-solid fa-briefcase", url: "https://www.instagram.com/devanshu_masodker/", text: "Portfolio"},
]


var image = document.querySelector(".main .image");

var clutter = ""

data.forEach(element => {

    clutter += `
    <div class="links"> 
    <i class="${element.icon}"></i>
    <h2>${element.text}</h2>
    <i class="${element.icon}"></i>

</div>
    `
})

image.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/devanshu-masodker-624782227/",)
})

var links = document.querySelectorAll(".image .links");
console.log(links);
links.forEach((link, index) => {
    console.log(link);
    link.addEventListener("click", () => {
        window.open(data[index].url, "_blank")
    })
});


image.innerHTML = clutter;