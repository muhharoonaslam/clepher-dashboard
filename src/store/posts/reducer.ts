import { Action } from "redux";
import { Post } from "../../types";
interface PostsState {
  data: Post[];
}

const initialState: PostsState = {
  data: [
    {
      id: 1,
      platform: "Instagram",
      name: "Operations",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 2,
      platform: "Messenger",
      name: "Integration",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 3,
      platform: "Messenger",
      name: "Factors",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 4,
      platform: "Messenger",
      name: "Functionality",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 5,
      platform: "Messenger",
      name: "Implementation",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 6,
      platform: "Instagram",
      name: "Integration",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 7,
      platform: "Instagram",
      name: "Intranet",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 8,
      platform: "Messenger",
      name: "Creative",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 9,
      platform: "Instagram",
      name: "Usability",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
    {
      id: 10,
      platform: "Messenger",
      name: "Implementation",
      engaged: "50 / 25",
      acquired: 66,
      conversion: "10%",
    },
  ],
};

const postsReducer = (state = initialState, action: Action): PostsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postsReducer;
