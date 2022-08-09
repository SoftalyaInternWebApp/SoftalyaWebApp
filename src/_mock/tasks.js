// import { faker } from '@faker-js/faker/locale/tr';
import { faker } from '@faker-js/faker/locale/tr';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const tasks = [...Array(24)].map(() => ({
    name: faker.address.streetAddress(),
    status: sample(['active', 'banned']),
}));

export default tasks;
