export type MemberStatus = "active" | "frozen" | "expired";

export type MembershipType = "basic" | "standard" | "premium";

export type Member = {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipType: MembershipType;
  status: MemberStatus;
  endDate: string;
  notes: string;
  createdAt: string;
};
