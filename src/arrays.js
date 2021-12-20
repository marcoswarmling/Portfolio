import { Link } from 'react-router-dom';

export const images = [{ link: 'data:image/jpeg;base64,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', Name: 'javascript' },
  { link: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png', Name: 'html' },
  { link: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', Name: 'css' },
  { link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', Name: 'react' },
  { link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg', Name: 'Mysql' },
  { link: 'https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png', Name: 'mongoDB' },
  { link: 'https://cdn-icons-png.flaticon.com/512/38/38401.png', Name: 'github' },
  { link: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png', Name: 'node' },
  { link: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', Name: 'express' },
  { link: 'https://symbols.getvecta.com/stencil_95/67_sequelize-icon.54c1e009e5.svg', Name: 'html' },
];

export const education = [{
  image: 'https://avatars.githubusercontent.com/u/51808343?s=200&v=4',
  imageName: 'logo da trybe',
  institution: 'Trybe',
  courseName: 'Desenvolvimento WEB Full Stack, Desenvolvimento de Software',
  duration: '2021 - 2022',
  description: 'Turma 11 | Março 2021 A Trybe é uma escola de desenvolvimento web que tem comprometimento genuíno com o sucesso profissional das pessoas estudantes. Tanto é esse comprometimento que tem a opção de pagar apenas quando estiver trabalhando. São mais de 1500 horas de formação que aborda fundamentos de desenvolvimento web, desenvolvimento, Front-end, Back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais',
},
{
  image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFUUj8M8544eg/company-logo_200_200/0/1628784788044?e=1640822400&v=beta&t=hVoDejYaB7AWBd-CacptCzZXNAGO0d1ZR_G6r7wdMSo',
  imageName: 'logo senai SC',
  institution: 'SENAI/SC - Serviço Nacional de Aprendizagem Industrial',
  courseName: 'Curso Técnico Integrado, Tecnologia em Tecnologia da Informação/Sistemas da Informação',
  duration: '2018 - 2020',
  description: 'Onde tive um dos meus primeiros contatos com programação. Estudando principalmente lógica, e o básico de Front E Back End.',
},
{
  image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQFUUj8M8544eg/company-logo_200_200/0/1628784788044?e=1640822400&v=beta&t=hVoDejYaB7AWBd-CacptCzZXNAGO0d1ZR_G6r7wdMSo',
  imageName: 'logo senai SC',
  institution: 'SENAI/SC - Serviço Nacional de Aprendizagem Industrial',
  courseName: 'Curso Técnico, Assistente de produção',
  duration: '2019 - 2020',
  description: 'Curso do Jovem aprendiz. Onde aprimorei minha organização, raciocínio logico, Relações Sócio-profissionais, Cidadania e Ética.',
}];

export const company = [{
  image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHCmao7CjTIlA/company-logo_200_200/0/1579200846388?e=1640822400&v=beta&t=_Gk1ohIW5QVajdG3M8kmFRQ3OpoMbYLD99hu6E-Zfxg',
  imageName: 'Logo da empresa Automatiza ',
  office: 'Assistente administrativo, Menor aprendiz',
  institution: 'Automatisa Laser Solutions',
  duration: '2019 - 2020',
  description: 'Atuava como auxiliar na produção, RH, e almoxarifado.',
}];

export const Backprojects = [{
  Name: 'Project-blogs-api',
  Description: 'Neste projeto da Trybe foi testado minha abilidade de criar e associar tabelas usando models do sequelize. ',
  link: 'https://github.com/marcoswarmling/sd-011-project-blogs-api',
  image: 'https://thumbs2.imgbox.com/f6/e5/6KgjjiOW_t.png',
},
{
  Name: 'One For All',
  Description: 'Neste projeto da Trybe recebi uma tabela SQL não normalizada e o desafio era Normalizar essa tabela, 1.criar o schema no banco de dados local e populá-lo. 2.Realizar os desafios Propostos no banco normalizado e populado. ',
  link: 'https://github.com/marcoswarmling/sd-011-mysql-one-for-all',
  image: 'https://thumbs2.imgbox.com/c1/20/twUm6mOv_t.png',
}
];

