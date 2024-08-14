import styled from "@emotion/styled"

export const WorkPlayToggleContainer = styled.div`
width: 160px;
height: 100px;
background-color: rgba(255, 255, 255, 0.4);
display: flex;
justify-content: ${props => (props.toggle ? 'flex-start' : 'flex-end')};
border-radius: 50px;
padding: 10px;
cursor: pointer;

.handle {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
}
`