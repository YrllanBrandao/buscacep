const inputSearch = document.querySelector('#inputSearch')



inputSearch.addEventListener('keypress', (e)=>{
   
  if(e.key === "Enter")
  {
    
     
    search()
    
  }
  
});


const search = () =>{
  
  const cep = inputSearch.value.replace('-', "").replace(' ', "");;
  ;
  
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    
    fetch(url)
    
    .then((response) =>{
      
     return response.json();
      
      
    }).then((result) =>{
      
     const  tabela = document.querySelector('#showData');//tabela = showdata
    
      
      tabela.style.display = "block";
      
      const {bairro,localidade, cep, logradouro} = result;
     
     tabela.innerHTML  = `Endereço: ${logradouro}<br/>Bairro: ${bairro} <br/> Localidade: ${localidade}<br/> Cep: ${cep}`;
   
    
    }).catch(error => {
      alert("por favor, insira um cep válido");
      inputSearch.value = null;
    })
  
  
}


//criando variáveis no root do css

const viewH = window.innerHeight;
document.documentElement.style.setProperty('--vh', `${viewH}px`);

document.documentElement.style.setProperty('--vh-area-search', `${(viewH*80)/100}px`);

document.documentElement.style.setProperty('--vh-header', `${(viewH*10/100)}px`);


