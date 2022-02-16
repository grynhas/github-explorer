export function RepositoryItem (props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Titulo'}</strong>
      <p>{props.repository?.description ?? 'aqui'}</p>

      <a href={props.repository?.description }>
        Acessar repositorio
      </a>
    </li>
  )
}