import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import PageHeader from '../../components/DrawerPageHeader';
import NarguileItemTypeListItem from '../../components/NarguileItemTypeListItem';
import { useNotifications } from '../../hooks/notifications';

import NarguileIcon from '../../assets/icons/Narguile';
import RoshIcon from '../../assets/icons/Rosh';
import DishIcon from '../../assets/icons/Dish';
import HoseIcon from '../../assets/icons/Hose';
import AbafadorIcon from '../../assets/icons/Abafador';
import styles from './styles';

const types = [
  {
    name: 'Narguiles',
    typeId: 1,
    icon: NarguileIcon,
  },
  {
    name: 'Mangueiras',
    typeId: 2,
    icon: HoseIcon,
  },
  {
    name: 'Roshs',
    typeId: 3,
    icon: RoshIcon,
  },
  {
    name: 'Abafador',
    typeId: 4,
    icon: AbafadorIcon,
  },
  {
    name: 'Pratos',
    typeId: 5,
    icon: DishIcon,
  },
  {
    name: 'Vasos',
    typeId: 6,
    icon: NarguileIcon,
  },
];

const NarguileItemTypes = ({ navigation }) => {
  const { refreshNotifications } = useNotifications();

  useFocusEffect(() => {
    refreshNotifications();
  }, []);

  return (
    <>
      <PageHeader title="Narguiles" drawerNavigation={navigation} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.headline}>Categorias</Text>
        <FlatList
          data={types}
          keyExtractor={(item) => `${item.typeId}`}
          renderItem={({ item, index }) => (
            <NarguileItemTypeListItem item={item} isFirst={index === 0} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default NarguileItemTypes;
