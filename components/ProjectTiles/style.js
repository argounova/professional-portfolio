import styled from "@emotion/styled"

export const ProjectTilesStyles = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 100vh;
max-height: 100vh;
max-width: 100vw;
padding: 5%;

.hover-shadow {
  &:hover {
    box-shadow: 0 0 10px 5px rgba(156, 39, 176,0.5);
  }
}
`