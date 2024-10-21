export interface Post {
    id: number;
    platform: "Instagram" | "Messenger";
    name: string;
    engaged: string;
    acquired: number;
    conversion: string;
  }
  
  export interface Bot {
    id: string;
    name: string;
    genre: string;
    totalSubscribers: number;
    activeSubscribers: number;
  }
  