import faker from 'faker';

export const makeCards = function(count) {
  let data = []
  for(let i = 0; i < count; i++) {
    data.push(faker.helpers.userCard())
  }
  return data;
}