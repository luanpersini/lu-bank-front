import { useFetch } from 'src/common/adapters/ReactQueryAdapter'
import apiPaths from 'src/common/paths/apiPaths'
import { AccountOperation } from '../interfaces/AccountOperation'

export const useGetAccountOperation = (id: string) => useFetch<AccountOperation>(apiPaths.accountOperations.baseUrl + id)

export const useGetAccountOperationsList = (accountId: string) => {
  const useQuery = () => useFetch<AccountOperation[]>(apiPaths.accountOperations.getAccountOperations + accountId)
    
  const query = useQuery()

  const listAccountOperations = () => {
    if (query.data) {      
      return query.data
    }
    return []
  }

  return { listAccountOperations, query }
}
