import { Link, LinkProps } from 'react-router-dom'
import { IAreaAction } from 'src/interfaces/authorization'
import styled from 'styled-components'
import { ProtectedElement } from '../general/ProtectedElement'

const StyledLink = styled(Link)`
  background-color: inherit;
  color: inherit;
  text-decoration: inherit;
  border: inherit;
`
interface Props extends LinkProps { 
  authorization?: IAreaAction 
}

//This function replaces the "useNavigation" function and should be used moving forward
export function NavigationLink(props: Props) {
  return (
    <ProtectedElement authorization={props?.authorization}>
      <StyledLink {...props} />
    </ProtectedElement>
  )
}
