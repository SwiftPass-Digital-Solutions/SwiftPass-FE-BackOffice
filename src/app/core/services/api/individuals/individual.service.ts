import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customer } from "@core/interfaces/individuals/customer.interface";
import { BaseResponseList } from "@core/models/shared/base-response-list.interface";
import { environment } from "@env/environment";
import { BaseResponse } from "@shared/models/api";

/**
 * individual.services
 */
@Injectable({
  providedIn: 'root',
})
export class IndividualService {
    private baseUrl = `${environment.apiUrl}/vault/BackOffice`;
    constructor(private httpClient: HttpClient) {}

    getIndividuals(searchTerm: string = '', pageNumber: number = 1, pageSize: number = 10) {
        return this.httpClient.get<BaseResponse<BaseResponseList<Customer>>>(`${this.baseUrl}/Individuals?searchTerm=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }
}
