# Flashcard App

Web app to create and share flashcards.

## Installation

### Backend
**Google Firebase**
* Create web app in [Firebase](https://firebase.google.com). Enable Email Authentication, Cloud Firestore Database, Storage, Hosting.
* Install Firebase CLI
```
npm install -g firebase-tools
```
* Login
```
firebase login
```
* Initialize
```
firebase init
```
* Deploy
```
firebase deploy
```

### Frontend
**Angular application**
* Install prerequisites
```
npm install
```
* Update firebase configuration at `src/environments/environment*.ts`
* Run locally
```
npm run start
```
* Deploy to Firebase hosting
```
npm run deploy
```
