import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__content">
        <Header />

        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
