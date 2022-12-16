export const formatDate = {
  /**
   * Format a given timestamp (string)
   * @param {string} 2022-08-05 17:14:35.553-03
   *
   * into a Locale date, that will be show according with the user brower language (ex: en-US, pt-BT)
   * @returns {string} 05/08/22
   */

  toLocaleDate(date: Date) {
    if (!date) {
      return
    }
    return new Date(date).toLocaleString(undefined, {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
      timeZone: 'Etc/GMT'
    })
  },

  /**
   * Format given timestamp (string)
   * @param {string} 2022-08-05 17:14:35.553-03
   *
   * into "YYYY-MM-DD" date - Used in the HTML datapicker
   * @returns {string} 2022-08-05
   */
  toDateOnly(date: string) {
    if (!date) {
      return
    }
    return date.substring(0, 10)
  }
}
