//TODO (FD) Create a test for this class
export class QueryHelper {
  public static buildUrlWithParameters(url: string, parameters: any[]): string {
    if (parameters.length === 0) {
      return url
    }
    let result = url + '?'

    for (let i = 0; i < parameters.length; i++) {
      if (parameters[i].name && parameters[i].value) {
        result += parameters[i].name + '=' + parameters[i].value
        if (i < parameters.length - 1) {
          result += '&'
        }
      }
    }

    return result
  }
}
