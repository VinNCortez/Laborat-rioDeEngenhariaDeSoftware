let root = ReactDOM.createRoot(document.getElementById("root"))
const frase = "Venha estudar na Fatec";
let i = 0;

 function mostrar(){
     if (i === frase.length)
         i=0;
     root.render(<h2>{frase.slice(0, i)}</h2>);
         i++;
     }

setInterval(mostrar,250)