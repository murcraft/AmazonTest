import dateFormat from 'dateformat'

export default {
  /**
   * Returns date in the specified format
   * @param format - required parameter. Defines date format - https://www.npmjs.com/package/dateformat - Named Format
   * @param dateTime - optional parameter. Desired date.
   * @returns formatted date
   */
  getDateTime (format = 'isoDateTime', dateTime) {
    const actualDateTime = dateTime === undefined ? new Date() : new Date(dateTime)
    return dateFormat(actualDateTime, format)
  }
}