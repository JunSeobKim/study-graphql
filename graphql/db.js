// graphql 감싸기
import axios from "axios";

const API_KEY = "https://yts.mx/api/v2/list_movies.json";

export const getMovie = (limit) => {
  return axios
    .get(API_KEY + `?limit=${limit}`)
    .then((res) => {
      let movies = res.data.data.movies;
      return movies;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

// 기본적인 graphql
export let people = [
  {
    id: 0,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 1,
    name: "Jisu",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "Japan Guy",
    age: 18,
    gender: "male",
  },
  {
    id: 3,
    name: "Daal",
    age: 18,
    gender: "male",
  },
  {
    id: 4,
    name: "JD",
    age: 18,
    gender: "male",
  },
  {
    id: 5,
    name: "moondaddi",
    age: 18,
    gender: "male",
  },
  {
    id: 6,
    name: "flynn",
    age: 18,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((people) => people.id === id);
  return filteredPeople[0];
};

export const addPeople = (name, age, gender) => {
  let newPeople = {
    id: people[people.length - 1].id + 1,
    name,
    age,
    gender,
  };
  people.push(newPeople);
  return newPeople;
};

export const deletePeople = (id) => {
  try {
    people.splice(
      people.findIndex((ele) => ele.id === id),
      1
    );
  } catch (error) {
    return false;
  }
  return true;
};
