import React, { useState } from "react";
import styled from "styled-components";

interface CircleProps {
    bgColor: string;
    borderColor?: string; //?: 하면 옵셔널 (없을수도 있따고말하는것)
    text?: string;
}

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 50%;
    border: 5px solid ${(props) => props.borderColor};
`;

interface PlayerShape {
    name: string;
    age: number;
}
const sayHello = (palyerObj: PlayerShape) => `Hello ${palyerObj.name} you are ${palyerObj.age}`;

sayHello({ name: "mimi", age: 12 });
// sayHello({ name: "mimi", age: 12, hello: 1 }); 이렇게하면 에러남
export default function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
    const [counter, setCounter] = useState<number | string>(1);
    setCounter(2);

    return (
        <div>
            <Container bgColor={bgColor} borderColor={borderColor ?? "#000"}>
                {text}
            </Container>
            {/*default 초기값 : borderColor는 사용자가 만든 borderColor값이며 만약 undefined 된 상태라면 그냥 white로 값을보낸다.  */}
        </div>
    );
}

/**
 *
 * 옛날방식 const x = (a:number,b:number) => a+b
 *
 * object shape)객체 모양)을 tyupeScript에게 설명해준다. 이렇게하는걸 interface라고한다.
 */
