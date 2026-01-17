export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  customerStatus: string;
  spsn: any;
  verifiedDocumentsCount: number;
  totalDocumentsCount: number;
  onboardedOn: string;
}
