import styled from 'styled-components/native'

const HView = styled.View`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
  `;

  const CenterView = styled.View`
  display:flex;
  justify-content: center;
`;

  const IconCaption = styled.Text`
    font-size:12px
    text-align:center;
    color:gray
  `;

export {
    HView,CenterView,IconCaption
}