async function quantidadeUsuariosPorRede(){
    const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const rest= await fetch(url)
    const dados = await rest.json(dados)
    const nomeDasRedes = Object.values(dados)
    const  quantidadeDeUsuarios = Object.values(dados)

   
  
}