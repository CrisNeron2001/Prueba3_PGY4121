import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';
import {
  getFirestore,
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  getDocs,
  query,
  where,
  setDoc,
  getDoc,
  DocumentReference
} from '@angular/fire/firestore';
import { User } from 'src/app/interface/user.interface';
import { Admin } from 'src/app/interface/admin.interface';
import { Character } from 'src/app/interface/chara.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerFireService {

  constructor
    (
      private firestore: Firestore,
      private auth: Auth
    ) {

  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }

  createUser(user: User) {
    const dataRef = collection(this.firestore, 'User');
    return addDoc(dataRef, user);
  }

  getUser(): Observable<User[]> {
    const dataRef = collection(this.firestore, 'User');
    return collectionData(dataRef, { idField: 'uid' }) as Observable<User[]>;
  }

  deleteUser(user: User) {
    const dataDocRef = doc(this.firestore, `data/${user.uid}`);
    return deleteDoc(dataDocRef);
  }

  createAdmin(admin: Admin) {
    const dataRef = collection(this.firestore, 'Admin');
    return addDoc(dataRef, admin);
  }
  getAdmin(): Observable<Admin[]> {
    const dataRef = collection(this.firestore, 'Admin');
    return collectionData(dataRef, { idField: 'id' }) as Observable<Admin[]>;
  }

  addCharacter(chara: Character) {
    const dataRef = collection(this.firestore, 'Character');
    return addDoc(dataRef, chara);
  }

  getCharacter(): Observable<Character[]> {
    const dataRef = collection(this.firestore, 'Character');
    return collectionData(dataRef, { idField: 'id' }) as Observable<Character[]>;
  }

  deleteCharacter(chara: Character) {
    const dataDocRef = doc(this.firestore, `data/${chara.id}`);
    return deleteDoc(dataDocRef);
  }
}
