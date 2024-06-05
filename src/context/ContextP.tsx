import { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";

export type movie = {
  id: string; 
  title: string;
  poster: string;
  runtime: number;
  year: number;
  rating: string;
  votes: string;
  trailer: string;
  lang: string;
  description: string;
  country: string;
};
type StateType = {
  watchedList:movie[]
}
type contextValue = {
  watchedList: movie[] | null;
  dispatch: React.Dispatch<addActionType | deleteActionType>;
  setS: React.Dispatch<React.SetStateAction<string>>;
  s: string;
};
type addActionType = {
  type: `addMovie`;
  payload: {
    id : string;
          title: string;
          poster: string;
          runtime: number;
          year: number;
          rating: string;
          votes: string;
          trailer: string;
          lang: string;
          description: string;
          country: string;

  };
};
type deleteActionType = {
  type: `deleteMovie`;
  payload: {
    id: string;
   
  };
};
const storedData = localStorage.getItem("movieapp");

const initialState = {
  watchedList: storedData ? JSON.parse(storedData) : [],
};
function reducer(
  state: StateType,
  action: addActionType | deleteActionType
): StateType {
  switch (action.type) {
    case "addMovie": {
      const movieToAdd = action.payload;
      if(state.watchedList === null){
        toast.success("movie was added successfully")
        return {
          ...state,
          watchedList:[movieToAdd]
        }
      }
      const doubleCheckForMovie = state.watchedList?.filter(
        (item) => item.id === movieToAdd.id
      );
      if (doubleCheckForMovie?.length > 0) {
        return state;
      } else {
                toast.success("movie was added successfully",{
                
                });

        return { ...state, watchedList: [...state.watchedList, movieToAdd] };
      }
    }
    case "deleteMovie":
              toast.info("movie was deleted ");

      return {
        ...state,
        watchedList: state.watchedList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
  }
}

const contextProvider = createContext < contextValue | null>(null);
type contextProbs = {
  children : React.ReactNode
}
function ContextP({ children }: contextProbs) {
  const [{ watchedList }, dispatch] = useReducer(reducer, initialState);
  const [s, setS] = useState("");

  return (
    <contextProvider.Provider value={{ dispatch, watchedList, s, setS }}>
      {children}
    </contextProvider.Provider>
  );
}

export default ContextP;
export function UseData(){
    const context = useContext(contextProvider)
    if(context === undefined ) {
 throw new Error("context in undefined");
    } 
    return context
}