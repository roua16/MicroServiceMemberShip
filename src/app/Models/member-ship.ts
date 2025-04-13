export interface MemberShip {
    id: number;
    fees: number;
    paymentMethod: string;
    status: string;
    start_date: string; // ISO string format
    end_date: string;
    membershipType: string;
    subscriptionPlan: string;
    archived: boolean;
    // Ajoute d'autres propriétés si besoin (courses, payments, pricing...)
  }