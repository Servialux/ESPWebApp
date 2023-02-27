const buttons = document.querySelectorAll('.btn');
const body = document.getElementsByTagName("body")[0];

buttons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const ntotal = Number(event.target.value);
    const form = document.createElement("form");
    form.setAttribute("method", "post");
   

    for (var i = 0; i < ntotal; i++) {
      const myconfig = document.createElement("form");
      
      form.appendChild(myconfig);
    }
    body.appendChild(form);
  });
});
console.log(body);