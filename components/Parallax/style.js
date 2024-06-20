import styled from "@emotion/styled"

export const ParallaxWrapper = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;
scroll-snap-align: center;
perspective: 500px;

> div {
  width: 300px;
  height: 400px;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: #fff;
  overflow: hidden;
}

h2 {
  font-weight: 400;
  margin: 0;
  color: var(--neon_green);
  left: calc(50% + 130px);
  font-size: 56px;
  letter-spacing: -3px;
  line-height: 1.2;
  position: absolute;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
`

export const ProgressWrapper = styled.div`
.progress {
  position: fixed;
  left: 0;
  right: 0;
  height: 5px;
  background: #fff;
  bottom: 100px;
}
`