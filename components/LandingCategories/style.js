import styled from "@emotion/styled"

export const LandingCategoriesContainer = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
max-width: 100vw;
padding: 5%;
gap: 50px;

.hover-outline {
  &:hover {
    outline: 2px solid var(--white);
    opacity: 0.8;
}
`