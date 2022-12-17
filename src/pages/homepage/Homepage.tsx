import { ListWrapper } from 'src/components/elements/ListWrapper'
import { CustomTable } from 'src/components/elements/table'
import { PageTitle } from '../../components/template/page-title'
import { Page } from '../../interfaces/page'

export function Homepage(props: Page) {
  const data = [
    {
      id: '1234',
      amout: '1050.50'
    },
    {
      id: '12345',
      amout: '50'
    },
    {
      id: '123456',
      amout: '100'
    }
  ]
  const headers = ['id', 'amount']
  return (
    <div>
      <PageTitle title="Lu Bank" />
      <ListWrapper isLoading={false} data={data}>       
          <CustomTable headers={headers} data={data} tablestyle={"table-striped"} headerstyle={"table-dark"}/>
      </ListWrapper>
    </div>
  )
}
