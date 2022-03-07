const baseUrl = "https://api.nationalize.io/?name=";

const boton = document.querySelector("button");
boton.addEventListener("click", () => inputData);

const inputData = async () => {
    let inputText = document.querySelector("input").value;
    const result = await fetch(baseUrl + inputText);
    const resultJson = await result.json();
    
    console.log(resultJson.country);
  
      
      
      
    for (let i = 0; i < resultJson.country.length; i++) {
      const namePercentil = document.createElement("p");
      namePercentil.textContent = resultJson.country[i].country_id;
      document.body.appendChild(namePercentil);
    }
  };