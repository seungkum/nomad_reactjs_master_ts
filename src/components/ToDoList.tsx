import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import { v1 } from "uuid";

interface IForm {
    toDo: string;
}

interface IToDo {
    text: string;
    id: string;
    category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

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
    const [toDos, setToDos] = useRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [{ text: toDo, id: v1(), category: "TO_DO" }, ...oldToDos]);
        setValue("toDo", "");
    };
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register("toDo", {
                        required: "Please write a To Do",
                    })}
                    placeholder='Write a to do'
                />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => (
                    <li key={toDo.id}>
                        {toDo.text} id : {toDo.id}
                    </li>
                ))}
            </ul>
        </div>
    );
}
