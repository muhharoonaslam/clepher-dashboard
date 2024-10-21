import { Action } from "redux";
import { Bot } from "../../types";

interface BotsState {
  data: Bot[];
}

const initialState: BotsState = {
  data: [
    {
      id: "1",
      name: "Schulist and Sons",
      genre: "Country",
      totalSubscribers: 5,
      activeSubscribers: 4,
    },
    {
      id: "2",
      name: "Rempel LLC",
      genre: "World",
      totalSubscribers: 2,
      activeSubscribers: 2,
    },
    {
      id: "3",
      name: "McDermott - Zboncak",
      genre: "Jazz",
      totalSubscribers: 4,
      activeSubscribers: 5,
    },
    {
      id: "4",
      name: "Corwin - Hackett",
      genre: "Stage And Screen",
      totalSubscribers: 9,
      activeSubscribers: 5,
    },
    {
      id: "5",
      name: "Weissnat Inc",
      genre: "Country",
      totalSubscribers: 6,
      activeSubscribers: 2,
    },
    {
      id: "6",
      name: "Bogan Inc",
      genre: "Rock",
      totalSubscribers: 1,
      activeSubscribers: 1,
    },
    {
      id: "7",
      name: "Cummerata, Conroy and Carter",
      genre: "Electronic",
      totalSubscribers: 3,
      activeSubscribers: 7,
    },
    {
      id: "8",
      name: "Gutkowski, Schneider and Aufderhar",
      genre: "Pop",
      totalSubscribers: 7,
      activeSubscribers: 1,
    },
    {
      id: "9",
      name: "Wilkinson - Halvorson",
      genre: "Rock",
      totalSubscribers: 5,
      activeSubscribers: 5,
    },
    {
      id: "10",
      name: "Langworth, Turcotte and Leuschke",
      genre: "Reggae",
      totalSubscribers: 4,
      activeSubscribers: 7,
    },
  ],
};

const botsReducer = (state = initialState, action: Action): BotsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default botsReducer;
