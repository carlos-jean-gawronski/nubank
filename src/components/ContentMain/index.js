import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Menu from '../Menu';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function ContentMain() {
  return (
    <Container>
      <Menu />
      <Card>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$ 197.611,75</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$ 20,00 recebida de Marcos Silva hoje às 20:00
            horas.
          </Annotation>
        </CardFooter>
      </Card>
    </Container>
  );
}
