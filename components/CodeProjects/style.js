import styled from "@emotion/styled"

export const LandingCategoriesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
gap: 200px;

.ellipse {
  height: 30px;
  width: 390px;
  shape-outside: ellipse(390px 30px);
  background: radial-gradient(circle, rgba(13,13,13,0.9) 25%, rgba(13,13,13,0.6) 100%);
  border-radius: 50%;
}

`