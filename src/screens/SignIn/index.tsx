import React, { useState } from 'react';

import CheckBox from '@react-native-community/checkbox';
import Input from '../../components/Input';

import nikeImg from '../../assets/nike.png';
import googleImg from '../../assets/google.png';

import { 
  Container,
  Header,
  HeaderLogo,
  HeaderText,
  Form,
  Button,
  ButtonText,
  FormFooter,
  CheckBoxContainer,
  CheckBoxText,
  ForgotPasswordText,
  Footer,
  OtherLogin,
  GoogleLoginButton,
  GoogleLoginIcon,
  GoogleLoginButtonText,
  SignInText,
} from './styles';

const SignIn = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <Container>
      <Header>
        <HeaderLogo source={nikeImg} />
        <HeaderText>
          Olá, faça login para 
          {'\n'}
          continuar
        </HeaderText>
      </Header>

      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email" 
          keyboardType="email-address"
        />

        <Input 
          placeholder="Senha"
          secureTextEntry
          returnKeyType="send"
        />

        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>

        <FormFooter>
          <CheckBoxContainer>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <CheckBoxText>Lembre-me</CheckBoxText>
          </CheckBoxContainer>

          <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
        </FormFooter>
      </Form>

      <Footer>
        <OtherLogin>Ou faça login com:</OtherLogin>

        <GoogleLoginButton>
          <GoogleLoginIcon source={googleImg} />
          <GoogleLoginButtonText>Google</GoogleLoginButtonText>
        </GoogleLoginButton>

        <SignInText>Não tem um conta? Cadastre-se</SignInText>
      </Footer>
    </Container>
  );
}

export default SignIn;
