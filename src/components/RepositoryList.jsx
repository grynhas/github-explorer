import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github/orgs/rocketseat/repos
const repository = { 
  name: 'unform',
  description: 'forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [ repositories, setRepositories ] = useState([])

// use effect sem parâmetro atualiza sempre que tem um evento na pag (não recomendado)
// use effect também não pode ter uma dependência que ele mesmo muda isso gera um infinit Loop
  useEffect(() => {
    
  }, [])
  return (
    <section className="repository-list" >
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  )
}