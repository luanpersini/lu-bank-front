interface Props {
  headers: string[]
  data: unknown[]
  tablestyle?: string
  headerstyle?: string
}
export const CustomTable = ({ headers, data, tablestyle, headerstyle = '' }: Props) => {
  return (
    <table className={"table " + tablestyle}>
      <thead className={headerstyle}>
        <tr>
          <th scope="col">#</th>
          {headers.map((header, key) => (
            <th key={key} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((operation: any, key) => (
          <tr key={operation.id}>
            <th scope="row">{key}</th>
            <td> {operation.id}</td>
            <td>{operation.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
