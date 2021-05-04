import { useState } from 'react';
import { FlatList, ToastAndroid } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import { useTheme } from '../../hooks/theme';
import PageHeader from '../../components/DrawerPageHeader';
import LoadingIndicator from '../../components/LoadingIndicator';
import MixListItem from '../../components/MixListItem';
import api from '../../services/api';

import { Container, Input, InputContainer, Icon, NoFoundText } from './styles';

const SearchMixes = () => {
  const { colors } = useTheme();

  const [mixes, setMixes] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(
    'Digite para pesquisar um mix',
  );

  async function handleSearchMixes() {
    if (searchString === '') {
      setEmptyMessage('Digite para pesquisar um mix');
      return;
    }

    try {
      setLoading(true);
      const response = await api.get('/mix_search', {
        params: {
          name: searchString,
        },
      });

      if (response.data.mixes && response.data.mixes.length === 0) {
        setEmptyMessage('Nenhum mix encontrado!');
      }

      setMixes(response.data.mixes);
    } catch (err) {
      crashlytics().recordError(err);
      ToastAndroid.show('Erro ao carregar mixes', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <PageHeader title="Buscar mixes" backButton />
      <Container>
        <InputContainer backgroundColor={colors.inputBackground}>
          <Input
            borderColor={colors.inputBorder}
            textColor={colors.text}
            placeholder="Digite o nome da essência"
            placeholderTextColor={colors.inputPlaceholderText}
            onChangeText={(text) => setSearchString(text)}
            onSubmitEditing={handleSearchMixes}
          />
          <Icon
            onPress={handleSearchMixes}
            name="search"
            size={28}
            color="#c1bccc"
          />
        </InputContainer>
        {mixes.length > 0 && (
          <FlatList
            data={mixes}
            style={{ paddingHorizontal: 20 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <MixListItem mix={item} isFirst={index === 0} />
            )}
          />
        )}

        {!isLoading && mixes.length === 0 && (
          <NoFoundText color={colors.text}>{emptyMessage}</NoFoundText>
        )}
      </Container>
    </>
  );
};

export default SearchMixes;
