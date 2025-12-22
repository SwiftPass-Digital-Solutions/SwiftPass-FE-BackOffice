import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedStateService {
  private storageKey = '';
  private documentInfoKey = 'documentInfo';

  selectedDocumentInfo = signal<any | null>(this.readFromStorage(this.documentInfoKey));

  private readFromStorage(storageKey: any): any | null {
    const raw = sessionStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : null;
  }

  setDocumentInfo(value: any) {
    this.selectedDocumentInfo.set(value);
    sessionStorage.setItem(this.documentInfoKey, JSON.stringify(value));
  }

  clearDocumentInfo() {
    this.selectedDocumentInfo.set(null);
    sessionStorage.removeItem(this.documentInfoKey);
  }
}
