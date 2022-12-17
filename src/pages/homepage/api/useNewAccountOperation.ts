import { usePost } from 'src/common/adapters/ReactQueryAdapter'
import apiPaths from 'src/common/paths/apiPaths'
import { AccountOperation } from '../interfaces/AccountOperation'

export enum OperationTypes {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw'
}

export const useNewAccountOperation = (operationType: OperationTypes) => {
  const useQuery = (updater: (oldData: AccountOperation[], newData: AccountOperation) => AccountOperation[]) =>
    usePost<AccountOperation[], AccountOperation>(apiPaths.accountOperations.baseUrl + operationType, undefined, updater)

  const mutation = useQuery((oldData, newData) => [...oldData, newData])

  const newAccountOperation = async (data: AccountOperation) => {
    return await mutation.mutateAsync(data)
  }

  return { newAccountOperation }
}
