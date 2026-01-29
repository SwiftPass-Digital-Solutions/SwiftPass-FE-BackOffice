export interface BusinessInfo {
  businessId: number;
  businessName: string;
  registrationNumber: string;
  businessType: string;
  contactEmail: string;
  contactPhone: string;
  status: string;
  onboardedOn: string;
  approvedDocumentsCount: number;
  rejectedDocumentsCount: number;
  pendingDocumentsCount: number;
  documentCategories: BusinessInfoDocumentCategory[];
}

export interface BusinessInfoDocumentCategory {
  category: string;
  categoryName: string;
  documentCount: number;
  documents: BusinessInfoDocument[];
}

export interface BusinessInfoDocument {
  documentId?: number;
  documentSubType: number;
  documentCategory: string;
  subTypeName: string;
  documentName?: string;
  documentUrl?: string;
  verificationStatus: string;
  rejectionRemarks: any;
  uploadedAt?: string;
}
