import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    /* get: ({ get }) => {
        const toDos = get(toDoState);
        return toDos.length;
    }, */
    /* get: ({ get }) => {
        const toDos = get(toDoState);
        return [
            toDos.filter((todo) => todo.category === "TO_DO"),
            toDos.filter((todo) => todo.category === "DONE"),
            toDos.filter((todo) => todo.category === "DOING"),
        ];
    }, */
    get: ({ get }) => {},
});

export const categoryState = atom({
    key: "category",
    default: "TO_DO",
});
/*  
Selectors : state를 입력 받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값을 말한다. 
atom의 output을 변형시키는 도구 
atom은 다순히 배열을 줄뿐이고 
atom의 output을 변형시키는건 selectort
selector는 state를 가져다가 뭔가를 return 한다. absderived state라고 불리는 이유가 이거다.
이렇게하면 좋은게 todoSelector가 atom을 보고있따는거당
 */
