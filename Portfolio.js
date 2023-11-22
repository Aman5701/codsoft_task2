// for back to top button

var scroll = document.getElementById("top");
window.addEventListener("scroll", function(){
    scroll.style.transform = "rotate("+window.pageYOffset+"deg)";
})


// for About Section

var links = document.getElementsByClassName("title-links");
        var contents = document.getElementsByClassName("contents");

        function tab1(tabname){
            for(link of links){
                link.classList.remove("link1");
            }
            for(content of contents){
                content.classList.remove("cnt1");
            }
            event.currentTarget.classList.add("link1");
            document.getElementById(tabname).classList.add("cnt1")
        }





// for responsive side menubar

var menu = document.getElementById("menubar");

function openmenu(){
    menu.style.right = "0";
}

function closemenu(){
    menu.style.right = "-600px";
}





// for contact form info. collection

  const scriptURL = 'https://script.google.com/macros/s/AKfycbylSLIIKmGdOHv55iFTbLpZ6K5qGkED2uLMnTPJW0hCbosHlLkkBM3KkLnoUwQU5FU9/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })