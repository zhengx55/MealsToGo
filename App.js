import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export default function App() {
  return (
    <View>
      <Title>hello world</Title>
    </View>
  );
}
