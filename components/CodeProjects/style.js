import styled from "@emotion/styled"

export const CodeProjectsStyles = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 100px;
height: 100vh;
width: 100vw;
max-height: 100vh;
max-width: 100vw;
padding: 25% 2%;

@media (min-width: 768px) {
  padding: 10% 2%;
}

@media (min-width: 1200px) {
  padding: 5% 2%;
}
`