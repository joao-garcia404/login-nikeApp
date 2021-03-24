import React from 'react';

import { TextInputProps } from 'react-native';

import { 
  Container,
  TextInput,
} from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  icon?: string;
}

const Input = ({...rest }: InputProps) => {
  return (
    <Container>
      <TextInput
        placeholderTextColor="#A3A3A3"
        {...rest}
      />
    </Container>
  );
}

export default Input;
