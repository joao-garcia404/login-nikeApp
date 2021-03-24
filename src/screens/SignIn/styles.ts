import styled from 'styled-components/native';

import CheckBox from '@react-native-community/checkbox';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #EFF2F9;
`;

export const Header = styled.View`
  align-items: center;
`;

export const HeaderLogo = styled.Image`
  margin-top: 40px;
`;

export const HeaderText = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 0 30px;
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  border-radius: 5px;
  background: #4071F4;
  padding: 15px 0;
  margin-top: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export const FormFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxText = styled.Text``;

export const ForgotPasswordText = styled.Text``;

export const Footer = styled.View`
  align-items: center;

  width: 100%;
  margin-top: 25px;
  padding: 0 30px;
`;

export const OtherLogin = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const GoogleLoginButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  border-radius: 5px;
  background: #fff;
  padding: 15px 0;
  margin-top: 20px;
`;

export const GoogleLoginIcon = styled.Image`
  margin-left: 25px;
`;

export const GoogleLoginButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;

export const SignInText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

