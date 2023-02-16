import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
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
    const toDos = useRecoilValue(toDoState);
    const [todo, doing, done] = useRecoilValue(toDoSelector);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <h2>To Do</h2>
            <ul>
                {todo.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <h2> Doing</h2>
            <ul>
                {doing.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <h2>Done</h2>
            <ul>
                {done.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
        </div>
    );
}
