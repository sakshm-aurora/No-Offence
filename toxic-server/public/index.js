const form = document.getElementById("form");
const paragraph = document.getElementById("paragraph");
const redirectURL = "http://localhost:3000"
form.addEventListener('submit', e => {
    e.preventDefault();
    const text = document.getElementById("input_text").value.trim();
    if(!text){
        alert("Empty text");
    } else {
       fetch(`/check?text=${text}`).then(async (res) => {
           if(res.ok){
               const json = await res.json();
               if(!json.success){
                   alert("Error: " + json.message);
               } else {
                    paragraph.innerText = 
                    `Toxicity is ${json.percentage}%`;
                    if(json.percentage >= 75){
                        setTimeout(() => {
                            window.location.href = redirectURL;
                        }, 3000);
                    }
               }
           } else {
               alert("Something went wrong");
           }
       }).catch(e => {
           alert(e.message || "Check internet connection");
       })
    }
})