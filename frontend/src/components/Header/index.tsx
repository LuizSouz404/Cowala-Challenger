import logo from '../../assets/logo.png';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Cowala software" />
      </Content>
    </Container>
  )
}