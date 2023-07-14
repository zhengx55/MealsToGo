import React, { useContext } from 'react';
import { SafeArea } from '../../../components/safe-area';
import { Button } from 'react-native-paper';
import { AuthenticationContext } from '../../../services/authentication/auth.context';

const Setting = () => {
  const { onLogOut } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Button onPress={() => onLogOut()}>LogOut</Button>
    </SafeArea>
  );
};

export default Setting;
