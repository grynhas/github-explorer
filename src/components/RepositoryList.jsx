import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
  const [ repositories, setRepositories ] = useState([])

// use effect sem parâmetro atualiza sempre que tem um evento na pag (não recomendado)
// use effect também não pode ter uma dependência que ele mesmo muda isso gera um infinit Loop
  useEffect(() => {
      fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list" >
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}