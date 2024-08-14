import styled from "@emotion/styled"

export const BackgroundWorkContainer = styled.div`
.horizon_gradient {
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: rgb(0,0,0);
  background: linear-gradient(
    0deg,
    rgba(0,0,0,1) 34%,
    rgba(23,33,93,1) 50%,
    rgba(255,255,255,1) 51%,
    rgba(235,242,34,1) 56%,
    rgba(197,242,34,1) 58%,
    rgba(92,115,242,1) 70%,
    rgba(61,88,242,1) 73%,
    rgba(0,0,0,1) 90%
  );
}

.horizon_grid {
  position: absolute;
  z-index: -1;
  height: 50vh;
  width: 100vw;
  bottom: 0;
  left: auto;
}

.horizon_grid_background {
  background: url(https://turn17media-main.s3.amazonaws.com/grid-background-v2.png);
  background-size: cover;
  background-position: center;
  background-position-y: 0;
  position: absolute;
  z-index: -1;
  height: 50vh;
  width: 100vw;
  bottom: 0;
}

.radial_gradient {
  position: absolute;
  z-index: -10;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(217,217,217,0.4) 0%, 
    rgba(110,110,110,0.5) 10%, 
    rgba(13,13,13,1) 30%
  );
}
`