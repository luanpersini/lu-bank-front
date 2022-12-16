import { useLocation } from 'react-router-dom'
import { PageTitle } from '../../components/template/page-title'
import { Page } from '../../interfaces/page'

export function Homepage(props: Page) {
  const location = useLocation()
  const state = location.state as any
  const alertMessage: string = state?.alertMessage

  //TODO use <PageTitle {...props}>{title}</PageTitle> directly here since document title will move to app.ts
  return (
    <div>
      <PageTitle title="Lu Bank" />
      {alertMessage && <div className="alert alert-success">{alertMessage}</div>}
    </div>
  )
}
