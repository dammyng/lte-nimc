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


const LButton = styled.TouchableOpacity`
margin: 1px;
padding: 10px;
border-width:3px
border-color: #1b5e20
border-radius:7px
`
const BtnText = styled.Text`
color: #1b5e20;
font-size:17px
text-align:center
font-weight:bold
`
const TextInput = styled.TextInput`
font-size:17px
background-color:#f1f8e9
padding:10px
border-radius:7px
`
export {
    HView,CenterView,IconCaption, LButton,BtnText,TextInput
}