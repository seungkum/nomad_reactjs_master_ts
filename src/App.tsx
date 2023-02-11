import styled from "styled-components";
import Circle from "./Circle";

function App() {
    const Container = styled.div`
        background-color: ${(props) => props.theme.bgColor}; //만약 틀리면 알려준다. 에러라고
    `;
    const H1 = styled.h1`
        color: ${(props) => props.theme.textColor};
    `;
    return (
        <div className='App'>
            <Container>
                <H1> protected</H1>
            </Container>
        </div>
    );
}

export default App;
