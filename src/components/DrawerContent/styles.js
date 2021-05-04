import styled from 'styled-components';

import DrawerHeader from '../DrawerHeader';

import { fonts } from '../../styles';

const Container = styled.View`
  flex: 1;
`;

const Header = styled(DrawerHeader)`
  z-index: -1;
  top: -4px;
  align-items: center;
  justify-content: center;
`;

const Name = styled.Text`
  font-family: ${() => fonts.bold};
  font-size: ${() => `${fonts.bigSize}px`};
  color: white;
`;

const Email = styled.Text`
  font-family: ${() => fonts.light};
  font-size: ${() => `${fonts.tinySize}px`};
  color: white;
`;

const Divider = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: #c9c9c9;
`;

export { Container, Header, Divider, Email, Name };
