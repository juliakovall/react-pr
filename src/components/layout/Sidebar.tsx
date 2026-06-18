import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__logo">Fitness CRM</h2>

      <nav className="sidebar__nav">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/members">Members</NavLink>
        <NavLink to="/members/new">Add Member</NavLink>
      </nav>
    </aside>
  );
}
