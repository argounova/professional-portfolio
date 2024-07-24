import styled from "@emotion/styled"


export const ContentCardStyles = styled.section`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.main__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify_content: center;
  align_items: center;
  gap: 20px;
  width: 90%;
  max-height: 70%;
  background-color: rgb(0,0,0,0.6);
  color: var(--play1);
  box-shadow: 0px 0px 8px var(--neon_green);
  border-radius: 10px;
  margin-top: 40px;

  
}

.content__container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start; 
  width: 50%;
}

.view__buttons {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
}
`