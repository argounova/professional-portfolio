import styled from "@emotion/styled"


export const ContentCardStyles = styled.section`
.main__container {
  display: flex;
  justify_content: center;
  align_items: center;
  width: 100%;
  height: 440px;
  background-color: rgb(0,0,0,0.6);
  color: var(--play1);
  box-shadow: 0px 0px 8px var(--neon_green);
  border-radius: 10px;
  z-index: 1;

  p {
    color: var(--white);
    font-size: 1.2rem;
  }

  h2 {
    color: var(--white);
  }
}

.content__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 20px;

  h1 {
    color: var(--blue2);
    font-size: 4rem;
  }
}

.card__image {
  width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.description__container {
  height: fit-content;
  
}

.icon__container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
}

.tech__stack {
  display: flex;
  flex-direction: column;
  
  h1 {
    color: var(--neon_yellow);
    font-size: 2rem;
  }
}

.view__buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
}
`