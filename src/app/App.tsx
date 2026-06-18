import { Route, Routes } from "react-router-dom";

import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/HomePage";
import { MembersPage } from "../pages/MembersPage";
import { CreateMemberPage } from "../pages/CreateMemberPage";
import { MemberDetailsPage } from "../pages/MemberDetailsPage";
import { EditMemberPage } from "../pages/EditMemberPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/members/new" element={<CreateMemberPage />} />
        <Route path="/members/:id" element={<MemberDetailsPage />} />
        <Route path="/members/:id/edit" element={<EditMemberPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
