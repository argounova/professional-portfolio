import styled from "@emotion/styled"

export const ProjectTilesStyles = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
max-height: 100vh;
max-width: 100vw;
padding: 5%;

img {
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }
}
`