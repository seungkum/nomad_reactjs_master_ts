import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ToDoList() {
    // const [toDo, setToDo] = useState("");
    // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //     const {
    //         currentTarget: { value },
    //     } = event;
    //     setToDo(value);
    // };
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     console.log(toDo);
    // };

    interface IForm {
        email: string;
        firstName: string;
        lastName: string;
        username: string;
        password: string;
        password1: string;
        extraError?: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: "@naver.com",
        },
    });
    const onValid = (data: IForm) => {
        if (data.password !== data.password1) {
            setError("password1", { message: "Password are not the same" }, { shouldFocus: true });
        }
        /** setError("extraError", { message: "Server offline." });
         * setERror는 발생하는 문제에 따라 추가적으로 에러를 설정할수있게 도와줌
         * 유용한건 , form에서 너가 고른 input 항목에 강제로 focus 시킬수있따.
         */
    };
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                    placeholder='Email'
                />
                <span>{errors?.email?.message}</span>
                <input
                    {...register("firstName", {
                        required: "write here",
                        validate: {
                            noNico: (value) => (value.includes("nico") ? "no nicos allowed" : true),
                            noNick: (value) => (value.includes("nick") ? "no nick allowed" : true),
                        },
                    })}
                    placeholder='First Name'
                />
                <span>{errors?.firstName?.message}</span>
                <input
                    {...register("lastName", { required: "write here" })}
                    placeholder='Last Name'
                />
                <span>{errors?.lastName?.message}</span>
                <input
                    {...register("username", { required: "write here", minLength: 10 })}
                    placeholder='Username'
                />
                <span>{errors?.username?.message}</span>
                <input
                    {...register("password", { required: "write here", minLength: 5 })}
                    placeholder='Password'
                />
                <span>{errors?.password?.message}</span>
                <input
                    {...register("password1", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Your password is too short.",
                        },
                    })}
                    placeholder='Password1'
                />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}