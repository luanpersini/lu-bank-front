export interface AccountOperation {
  id?: string
  accountId: string
  operationId: string
  sourceId: string 
  amount: number
  createdAt?: Date
}