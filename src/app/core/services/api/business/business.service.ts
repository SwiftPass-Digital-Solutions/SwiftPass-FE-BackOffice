import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessInfo } from '@core/interfaces/business/business-info.interface';
import { Business } from '@core/interfaces/business/business.interface';
import { Customer } from '@core/interfaces/individuals/customer.interface';
import { BaseResponseList } from '@core/models/shared/base-response-list.interface';
import { environment } from '@env/environment';
import { BaseResponse } from '@shared/models/api';

/**
 * business.services
 */
@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private baseUrl = `${environment.apiUrl}/identity`;
  constructor(private httpClient: HttpClient) {}

  getBusinesses(
    status: string | null,
    searchTerm: string = '',
    pageNumber: number = 1,
    pageSize: number = 10,
  ) {
    return this.httpClient.get<BaseResponse<BaseResponseList<Business>>>(
      `${this.baseUrl}/Businesses?searchTerm=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}&status=${status || ''}`,
    );
  }

  getBusinessById(businessId: number) {
    return this.httpClient.get<BaseResponse<BusinessInfo>>(
      `${this.baseUrl}/Businesses/${businessId}`,
    );
  }

  approveOrRegectBusiness(
    businessId: number,
    documentId: number,
    status: string,
    reason: string = '',
  ) {
    return this.httpClient.put<BaseResponse<any>>(`${this.baseUrl}/Documents/status`, {
      businessId,
      documentId,
      status,
      rejectionRemarks: reason,
    });
  }
}
