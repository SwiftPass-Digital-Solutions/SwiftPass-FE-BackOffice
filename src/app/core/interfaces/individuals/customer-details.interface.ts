export interface CustomerDetails {
  profileDetails: CustomerProfileDetails;
  documents: CustomerDocument[];
  recentSpsnUsage: any[];
  vaults: CustomerVault[];
}

export interface CustomerProfileDetails {
  fullName: string;
  email: string;
  phoneNumber: any;
  onboardedDate: string;
  spsn: any;
}

export interface CustomerDocument {
  documentId: number;
  userFullName: string;
  email: string;
  documentType: string;
  documentCategory: string;
  documentNumber: any;
  userType: string;
  verificationStatus: string;
  lastUpdated?: string;
  expiryDate: any;
}

export interface CustomerVault {
  id: number;
  name: string;
  accessibility: string;
  isCustom: boolean;
  documentCount: number;
  documentsSize: number;
  documentCategoryState: string;
  documents: CustomerVaultDocument[];
}

export interface CustomerVaultDocument {
  id: number;
  name: string;
  url: string;
  sizeInBytes: number;
  documentValue: string;
  documentNumber: string;
  fileType: string;
  categoryName: any;
  categoryId: any;
  houseAddress: any;
  houseUtilityBillUrl: any;
  isUploaded: boolean;
}
