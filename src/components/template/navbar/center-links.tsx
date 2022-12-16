/* eslint-disable @typescript-eslint/ban-types */

import { Dropdown, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProtectedLink } from 'src/components/Elements/ProtectedLink'
import { Authorization } from 'src/interfaces/authorization'
import { detectIdentifier } from '../../../common/paths/detectIdentifier'
import navigationPath from '../../../common/paths/navigationPath'

export function CenterLinks() {
  if (!detectIdentifier())
    //TODO implement workflow when the association could not be identified
    return <></>

  return (
    <Nav activeKey={location.pathname} className="navbar-nav mx-auto mb-2 mb-lg-0">
      <ProtectedLink authorization={Authorization.taskRead} className="nav-link" to={navigationPath.tasks.home.resolve()}>
        Tasks
      </ProtectedLink>

      <ProtectedLink authorization={Authorization.projectRead} className="nav-link" to={navigationPath.projects.home.resolve()}>
        Projects
      </ProtectedLink>

      <NavDropdown title={<span>People</span>}>
        <ProtectedLink authorization={Authorization.userManagementRead} className="dropdown-item" to={navigationPath.people.home.resolve()}>
          View Teammates
        </ProtectedLink>
        <ProtectedLink authorization={Authorization.userInvitationCreate} className="dropdown-item" to={navigationPath.people.invite.resolve()}>
          Invite Teammate
        </ProtectedLink>
        <NavDropdown.Divider />
        <Dropdown.Header>Invitations</Dropdown.Header>
        <Link className="dropdown-item" to={navigationPath.settings.receivedInvitations.resolve()}>
          Received
        </Link>
        <ProtectedLink
          authorization={Authorization.userInvitationCreate}
          className="dropdown-item"
          to={navigationPath.people.sentInvitations.resolve()}
        >
          Sent
        </ProtectedLink>
      </NavDropdown>
    </Nav>
  )
}
