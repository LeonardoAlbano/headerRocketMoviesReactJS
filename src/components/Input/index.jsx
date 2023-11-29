import { Container } from "./styles";

export function Input() {
    return(
        <Container>
            <input 
                type="text"
                placeholder="Pesquise por um filme"
            />
        </Container>
    )
}