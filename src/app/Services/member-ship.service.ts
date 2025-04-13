import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberShip } from '../Models/member-ship';


@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  private apiUrl = 'http://localhost:8081/api/memberships'; // ajuste l'URL si ton backend est hébergé ailleurs

  constructor(private http: HttpClient) {}

  getAllMemberships(): Observable<MemberShip[]> {
    return this.http.get<MemberShip[]>(`${this.apiUrl}`);
  }

  getMembershipById(id: number): Observable<MemberShip> {
    return this.http.get<MemberShip>(`${this.apiUrl}/${id}`);
  }

  createMembership(membership: MemberShip): Observable<MemberShip> {
    return this.http.post<MemberShip>(`${this.apiUrl}`, membership);
  }

  updateMembership(id: number, membership: MemberShip): Observable<MemberShip> {
    return this.http.put<MemberShip>(`${this.apiUrl}/${id}`, membership);
  }

  deleteMembership(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  archiveMembership(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/archive`, {});
  }

  restoreMembership(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/restore`, {});
  }

  getActiveMemberships(): Observable<MemberShip[]> {
    return this.http.get<MemberShip[]>(`${this.apiUrl}/active`);
  }

  getArchivedMemberships(): Observable<MemberShip[]> {
    return this.http.get<MemberShip[]>(`${this.apiUrl}/archived`);
  }

  triggerAutoArchive(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/auto-archive`, {});
  }
}
