const btns = document.querySelectorAll('.btn');
const body = document.getElementsByTagName("body")[0];

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const ntotal = Number(event.target.value);
    const form = document.createElement("form");
    form.setAttribute("method", "post");
   

    for (let i = 0; i < ntotal; i++) {
      const myconfig = document.createElement("input");
    
      form.appendChild(myconfig);
    }

    body.appendChild(form);
  });
});