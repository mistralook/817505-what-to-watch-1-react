export const BrowserRoutes = {
  MAIN: '/',
  LOGIN: '/login',
  MYLIST: '/mylist',
  FILM: '/films/:id',
  ADDREVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  NOTFOUND: '/*'
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
