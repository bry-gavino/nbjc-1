import { User, Admin, Org } from 'interfaces';

/** Dummy user data. */
// eslint-disable-next-line import/prefer-default-export

export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const sampleAdminData: Admin[] = [
  { id: 105, name: 'Sonja' },
  { id: 106, name: 'Fred' },
];

// TODO: implement logo and date differently...
export const sampleOrgData: Org[] = [
  {
    id: 107,
    name: 'Org1',
    logo: 'logo1.png',
    date: 10122000,
    description: 'Description for Org 1 here',
  },
  {
    id: 108,
    name: 'Org2',
    logo: 'logo2.png',
    date: 10102000,
    description: 'Description for Org 2 here',
  },
];
