import React from 'react'

const images = [{link:"https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png", Nome: "javascript" },
{link:"https://cdn-icons-png.flaticon.com/512/1216/1216733.png", Nome: "html"},
{link:"https://cdn-icons-png.flaticon.com/512/732/732190.png", Nome: "css"},
{link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", Nome: "react"},
{link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", Nome: "Mysql"},
{link:"https://cdn-icons-png.flaticon.com/512/38/38401.png", Nome: "github"},
]


export default function WhoIAm() {
    return (
        <div>
            <h1>Quem sou eu</h1>
            <img 
            src="https://media-exp1.licdn.com/dms/image/C4E03AQE2NcBtSGLGJg/profile-displayphoto-shrink_800_800/0/1615327451133?e=1637798400&v=beta&t=hGwJo_-tuAo5IIanG1Ys6i_UZayrEG5j0Pb-H4y3KCg" 
            alt="Foto do Marcos Henrique Warmling. Homem branco, cabelos pretos, olhos castanhos, oculos azul escuro"
            width="250" height="250"
            />
        <div>
            <p>Meu nome é Marcos Warmling</p>
            <p>Atualmente moro no brasil, em Santa Catarina 🏖️ :</p>
            <p>Atualmente eu estudo desenvolvimento WEB na TRYBE 💻</p>
            <p>Meu hobby é jogar 🎮, ler mangá 📖, e assistir filmes 🎬</p>
        </div>
        <div>
        Conhecimentos:
        {images.map(({link, Nome}, index) => { return <img key={index} src={link} alt={Nome} width="40" height="40" ></img>})}
        </div>
        </div>
    )
}
