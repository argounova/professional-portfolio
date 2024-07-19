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

.hover-outline {
  &:hover {
    outline: 1px solid var(--neon_green);
    opacity: 0.5;
  }

  border-radius: 50px;
  border-bottom-left-radius: 0;
  background-color: #000;
}
`