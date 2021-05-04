import { useFocusEffect } from '@react-navigation/native';

import { FlatList } from 'react-native-gesture-handler';
import PageHeader from '../../components/DrawerPageHeader';
import NarguileItemTypeListItem from '../../components/NarguileItemTypeListItem';
import { useNotifications } from '../../hooks/notifications';

import NarguileIcon from '../../assets/icons/Narguile';
import RoshIcon from '../../assets/icons/Rosh';
import DishIcon from '../../assets/icons/Dish';
import HoseIcon from '../../assets/icons/Hose';
import StemIcon from '../../assets/icons/Stem';
import VaseIcon from '../../assets/icons/Vase';
import AbafadorIcon from '../../assets/icons/Abafador';
import { Container, Headline } from './styles';
import { useTheme } from '../../hooks/theme';

const types = [
  {
    name: 'Narguiles',
    typeId: 1,
    icon: NarguileIcon,
  },
  {
    name: 'Stems',
    typeId: 2,
    icon: StemIcon,
  },
  {
    name: 'Mangueiras',
    typeId: 3,
    icon: HoseIcon,
  },
  {
    name: 'Roshs',
    typeId: 4,
    icon: RoshIcon,
  },
  {
    name: 'Abafadores',
    typeId: 5,
    icon: AbafadorIcon,
  },
  {
    name: 'Pratos',
    typeId: 6,
    icon: DishIcon,
  },
  {
    name: 'Vasos',
    typeId: 7,
    icon: VaseIcon,
  },
];

const NarguileItemTypes = ({ navigation }) => {
  const { refreshNotifications } = useNotifications();
  const { colors } = useTheme();

  useFocusEffect(() => {
    refreshNotifications();
  }, []);

  return (
    <>
      <PageHeader title="Narguiles" drawerNavigation={navigation} />
      <Container>
        <Headline color={colors.text}>Categorias</Headline>
        <FlatList
          data={types}
          keyExtractor={(item) => `${item.typeId}`}
          renderItem={({ item, index }) => (
            <NarguileItemTypeListItem item={item} isFirst={index === 0} />
          )}
        />
      </Container>
    </>
  );
};

export default NarguileItemTypes;
