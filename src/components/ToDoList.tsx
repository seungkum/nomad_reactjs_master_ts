import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export default function ToDoList() {
    /* const [toDos, setToDos] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setToDos(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(toDos);
    }; */

    /** 위와 동일
     * value만 불러 오고 싶을때 : useRecoilValue
     * value를 바꾸고시프면 useSetReocilState
     * value와 변경함수 둘다얻고싶으면 useRecoilState
    
     const value = useRecoilValue(toDoState);
    const modFn = useSetRecoilState(toDoState); 
    
    */
    // const toDos = useRecoilValue(toDoState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
        console.log(event.currentTarget.value);
        console.log(toDos);
    };

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form action=''>
                <select value={category} onInput={onInput}>
                    <option value={Categories.TO_DO}>To Do</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                </select>
            </form>
            <CreateToDo />

            <ul>
                {toDos.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
        </div>
    );
}
