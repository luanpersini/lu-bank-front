import envConfig from '../../config/envConfig'

const { apiUrl } = envConfig

const apiPaths = { 
  accountOperations: {
    deposit: `${apiUrl}/deposit`,
    withdraw: `${apiUrl}/account/withdraw`
  }
}

export default apiPaths
