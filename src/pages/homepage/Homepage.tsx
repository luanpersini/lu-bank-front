import { ListWrapper } from 'src/components/elements/ListWrapper'
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
  return (
    <div>
      <PageTitle title="Lu Bank" />
      <ListWrapper isLoading={false} data={data}>
        {data.map((operation) => (
          <p key={operation.id}>{operation.id}: {operation.amout}</p>
        ))}
      </ListWrapper>
    </div>
  )
}
