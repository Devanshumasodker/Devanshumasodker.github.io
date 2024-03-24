var data = [
    { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/devanshu-masodker-624782227/", text: "LinkedIn"},
    { icon: "fa-brands fa-github", url: "https://github.com/Devanshumasodker", text: "GitHub"},
    { icon: "fa-brands fa-twitter", url: "https://twitter.com/DevanshuMehra29?t=yie5Ef4Yw1RKX3HFpYwurg&s=09" , text: "Twitter"},
    { icon: "fa-solid fa-briefcase", url: "http://devanshumasodker.me/devanshu-portfolio/", text: "Portfolio"},
]
var links = document.querySelectorAll(".image .links");



links.forEach((link, index) => {
    link.addEventListener("click", () => {
        window.open(data[index].url, "_blank")
    })

    })