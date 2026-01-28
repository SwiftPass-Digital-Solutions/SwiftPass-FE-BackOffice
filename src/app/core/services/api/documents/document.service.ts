import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentDetails } from '@core/interfaces/documents/document-details.interface';
import { Document } from '@core/interfaces/documents/documents.interface';
import { BaseResponseList } from '@core/models/shared/base-response-list.interface';
import { BaseResponse } from '@core/models/shared/base-response.interface';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private baseUrl = `${environment.apiUrl}/vault/BackOffice/Documents`;
  constructor(private client: HttpClient) {}

  getDocuments(pageNo: number, pageSize: number, userId = null) {
    return this.client.get<BaseResponse<BaseResponseList<Document>>>(
      `${this.baseUrl}?PageNumber=${pageNo}&PageSize=${pageSize}${userId ? `&userId=${userId}` : ''}`,
    );
  }

  getDocumentsById(documentId: number, documentCategory: string) {
    return this.client.get<BaseResponse<DocumentDetails>>(
      `${this.baseUrl}/${documentId}?documentCategory=${documentCategory}`,
    );
  }

  getDocumentsByUserId(userId: number) {
    return this.client.get(`${this.baseUrl}/individuals/${userId}`);
  }

  approveOrRejectDocument(documentId: string, documentCategory: string, approvalData: any) {
    return this.client.put(
      `${this.baseUrl}/${documentId}/status?documentCategory=${documentCategory}`,
      approvalData,
    );
  }
}
