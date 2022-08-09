// import { faker } from '@faker-js/faker/locale/tr';
import { faker } from '@faker-js/faker/locale/tr';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map(() => ({
  id: faker.datatype.uuid(),
  avatarUrl: faker.image.avatar(),
  name: faker.name.findName(),
  company: sample([
    'Antalya Havalimanı',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Genel Müdür',
    'Asistan',
    'Hava Trafik Kontrolörü',
    'Kabin Memuru',
    'Güvenlik',
    'Pilot'
  ]),
}));

export default users;
