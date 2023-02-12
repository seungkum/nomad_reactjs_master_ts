import styled from "styled-components";
import Circle from "./Circle";

function ThemeFile() {
    const Container = styled.div`
        background-color: ${(props) => props.theme.bgColor}; //만약 틀리면 알려준다. 에러라고
    `;
    const H1 = styled.h1`
        color: ${(props) => props.theme.textColor};
    `;

    interface DummyProps {
        otherThingHere?: boolean;
        text: string;
    }

    function Dummy({ text, otherThingHere = false }: DummyProps) {
        return <h1>{text}</h1>;
    }

    const onClick = (event: React.FormEvent<HTMLButtonElement>) => {};
    return (
        <div className='App'>
            <Container>
                <H1> protected</H1>
                <Dummy text='hello' otherThingHere={true} />
                <form action=''>
                    <button onClick={onClick}>click me</button>
                </form>
            </Container>
        </div>
    );
}

export default ThemeFile;

/**const onClick = (event:React.FormEvent<HTMLButtonElement>) => {};
 * event : React.FromEvent(이제 어떤 Element가 이 이벤트를 발생시킬지 말하는것)
 * 만약 이벤트가 form 내에 없다면 formEvent가 아닐거고
 * event:React.MouseEvent<HTMLButtonElement> 마우스이벤트가되겟지
 *
 * 때떄로 타입스크립트에 대한설명(타입선언)이 없는 패키지를 다운 받는일이 생길텐데
 * 만약 유명한라이브러리 타입스크립트가잇는 라이브러리를찾을꺼면 git에
 * DefinitelyTyped라는 레포지토리 내에 있다. (하지만비추 )
 * 그냥 시도해보라 npm i --save-dav @types/패키지명내임
 *
 *
 */
