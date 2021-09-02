import React, { useState } from "react";



const MainContent =() =>{

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [cartoon, setCartoon] = useState([
        {
            id: 1,
            name: "Rocket power",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://http2.mlstatic.com/D_NQ_NP_905191-MLB26896518498_022018-O.jpg",
    
        },
        {
            id: 2,
            name: "Du, Dudu e Edu",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "http://pm1.narvii.com/6577/747df4dbcf6a7fce830db4e8fd9c10c41185342c_00.jpg",
        },
        {
            id: 3,
            name: "Coragem o cão Covarde",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image:"https://uploads.metropoles.com/wp-content/uploads/2018/10/25111316/coragem-cao-covarde-5.jpg",
        },
        {
            id: 4,
            name: "Os Flinstones",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image:"https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=36aed651-5933-4cc1-9410-21f903c01112",
        },
        {
            id: 5,
            name: "A vaca e o Frango",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image:"https://http2.mlstatic.com/D_NQ_NP_795601-MLB20345696188_072015-O.jpg",
        },
        {
            id: 6,
            name: "O laboratório de Dexter",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image:"https://www.einerd.com.br/wp-content/uploads/2020/05/O-Laborat%C3%B3rio-de-Dexter-capa.jpg",
        },
    ]);

    const handleNameChange = (evento) =>{
        setName(evento.target.value);
  
      }

    const handleImageChange = (evento) =>{
        setImage(evento.target.value);

    }

    const handleDescriptionChange = (evento) =>{
        setDescription(evento.target.value);
    }
    

    const adicionaCartoon = (e) =>{
        e.preventDefault();
        setCartoon([
            ...cartoon,
            {
              id: cartoon.length+1,
              name: name,
              description: description,
              image: image,
            }
          ]);
          setName('');
          setDescription('');
          setImage('');

}    
    
    const form =
        
        <div>
                
            <form onSubmit={adicionaCartoon}>
                <label> Nome do Cartoon </label>
                <input type="text" value={name} onChange={handleNameChange} />
                <br/>
                <label> Descrição do Cartoon</label>
                <input type="text" value={description} onChange={handleDescriptionChange} />
                <br/>
                <label> Imagem do Cartoon</label>
                <input type="text" value={image} onChange={handleImageChange} />
                <br/>
                <button type="submit">Salvar</button>

            </form>
        </div>

    

    
    

    const listItems = cartoon.map((item) =>
        <div className="card" key={item.id}>
            <h2>{item.name}</h2>
            <div className="cardImg">
                <img src={item.image} />
            </div>
            <div className="CardInfo" >
                
                <p>{item.description} </p>

            </div>

        </div>

    
    
    );
    return(
        <div className="mainContent">
            {form}
            {listItems}
        </div>
    )

    
}


export default  MainContent;
