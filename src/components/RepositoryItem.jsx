export function RepositoryItem (props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Titulo'}</strong>
      <p>{props.repository?.description ?? 'aqui'}</p>

      <a href={props.repository?.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}