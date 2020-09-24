// 보낸 요청에 따라 database에서 원하는 데이터를 받아올 수 있도록 핸들링 할 수 있는 역할
import { getMovie, people, getById, addPeople, deletePeople } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
    movies: (_, { limit }) => getMovie(limit),
  },
  Mutation: {
    addPeople: (_, { name, age, gender }) => addPeople(name, age, gender),
    deletePeople: (_, { id }) => deletePeople(id),
  },
};

export default resolvers;
