import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '@core/interfaces/individuals/customer-details.interface';
import { Customer } from '@core/interfaces/individuals/customer.interface';
import { BaseResponseList } from '@core/models/shared/base-response-list.interface';
import { environment } from '@env/environment';
import { BaseResponse } from '@shared/models/api';

/**
 * individual.services
 */
@Injectable({
  providedIn: 'root',
})
export class IndividualService {
  private baseUrl = `${environment.apiUrl}/vault/BackOffice`;
  constructor(private httpClient: HttpClient) {}

  getIndividuals(searchTerm: string | null = null, pageNumber: number = 1, pageSize: number = 10) {
    return this.httpClient.get<BaseResponse<BaseResponseList<Customer>>>(
      `${this.baseUrl}/Customers?pageNumber=${pageNumber}&pageSize=${pageSize}${searchTerm ? `&searchTerm=${searchTerm}` : ''}`,
    );
  }

  getIndividualById(individualId: number) {
    return this.httpClient.get<BaseResponse<CustomerDetails>>(
      `${this.baseUrl}/Documents/Customers/${individualId}`,
    );
  }

  approveOrRejectIndividualDOcument(
    individualId: number,
    documentId: number,
    status: string,
    reason: string = '',
  ) {
    return this.httpClient.put<BaseResponse<any>>(`${this.baseUrl}/Documents/status`, {
      individualId,
      documentId,
      status,
      rejectionRemarks: reason,
    });
  }
}
