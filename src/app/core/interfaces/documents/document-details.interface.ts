export interface DocumentDetails {
  fullName: string;
  onboardedDate: string;
  spsn: any;
  documentName: string;
  providerDocumentDetails: ProviderDocumentDetails;
  addressDocumentDetails: any;
  otherDocuments: OtherDocument[];
}

export interface ProviderDocumentDetails {
  id: number;
  documentType: string;
  documentCategory: string;
  documentId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  expiryDate: any;
  issueDate: any;
  uploadedDate: string;
  phonenumber: string;
  houseImageFileUrl: any;
  houseUtilityImageFileUrl: any;
  documentImageFileUrl: string;
}

export interface OtherDocument {
  documentId: number;
  userFullName: string;
  email: string;
  documentType: string;
  documentCategory: string;
  userType: any;
  verificationStatus: string;
  lastUpdated?: string;
  expiryDate: any;
  documentImageFileUrl: string;
}
