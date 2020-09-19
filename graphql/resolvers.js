// 보낸 요청에 따라 database에서 원하는 데이터를 받아올 수 있도록 핸들링 할 수 있는 역할
import { people, getById } from "./db";

const resolvers = {
  Query: {
    person: () => people,
    people: (_, { id }) => getById(id),
  },
};

export default resolvers;
