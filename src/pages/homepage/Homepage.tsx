import { ListWrapper } from 'src/components/elements/ListWrapper'
import { CustomTable } from 'src/components/elements/table'
import { Button } from 'src/components/general'
import { PageTitle } from '../../components/template/page-title'
import { Page } from '../../interfaces/page'
import { OperationTypes, useNewAccountOperation } from './api/useNewAccountOperation'

export function Homepage(props: Page) {
  const { newAccountOperation: newDeposit } = useNewAccountOperation(OperationTypes.DEPOSIT)
  const { newAccountOperation: newWithdraw } = useNewAccountOperation(OperationTypes.WITHDRAW)
  const headers = ['id', 'amount']
  const accountId = 'accountId-1234'
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

  // const makeOperation = (params: AccountOperation) => ({
  //   accountId: 'accountId',
  //   operationId: params.operationId,
  //   sourceId: 'string',
  //   amount: params.amount
  // })

  return (
    <div>
      <PageTitle title="Lu Bank" />
      <p>Welcome! Use the buttons bellow to make your operations.</p>
      <p>
        <Button
          onClick={() => newDeposit({ accountId, operationId: OperationTypes.DEPOSIT, sourceId: 'terminal', amount: 100 })}
          label="Deposit 100"
        />
      </p>
      <ListWrapper isLoading={false} data={data}>
        <CustomTable headers={headers} data={data} tablestyle={'table-striped'} headerstyle={'table-dark'} />
      </ListWrapper>
    </div>
  )
}
