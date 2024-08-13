import styled from "@emotion/styled"


export const GridStyles = styled.section`
width: 100vw;
height: 100vh;
padding: 100px 0px;
background-color: rgb(0,0,0,0.6);
display: grid;
grid-template-columns: 32px 1fr 32px;
grid-template-areas:
  ". description ."
  ". image ."
  ". buttons .";
  gap: 1rem;



#grid__image {
  grid-area: image;
  border-radius: 10px;
  max-width: 100%;
  margin: auto;
}

#grid__description {
  grid-area: description;
  min-width: 100%;
  list-style-type: none;
}

#grid__description h2 {
  color: var(--play1);
}

#grid__buttons {
  grid-area: buttons;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
  
@media (min-width: 768px) {
  #grid__image {
    max-width: 75%;
  }
}

@media (min-width: 1920px) {
  grid-template-columns: 32px 1fr 1fr 32px;
  grid-template-areas:
    ". description image ."
    ". buttons buttons .";

  #grid__image {
    max-width: 50%;
  }

  #grid__description li {
    margin: 20px 0px;
  }
}
`