import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, ToastAndroid } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

import SavePageHeader from '../../components/SavePageHeader';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { useTheme } from '../../hooks/theme';

import { fonts, metrics } from '../../styles';
import {
  Form,
  Input,
  InputContainer,
  InputCategory,
  DropDownPicker,
  InputLabel,
  WarningText,
  DescriptionInput,
} from './styles';

const CreateMix = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { colors } = useTheme();

  const form = useRef(null);

  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategoryList() {
      try {
        const response = await api.get('/flavor_categories');
        const list = response.data.map((item) => ({
          label: item.name,
          value: item.id,
        }));
        setCategoryList(list);
      } catch (err) {
        crashlytics().recordError(err);
        ToastAndroid.show('Erro ao carregar categorias', ToastAndroid.SHORT);
      }
    }

    fetchCategoryList();
  }, []);

  function handleSaveButtonPress() {
    form.current.submitForm();
  }

  async function handleFormSubmit(data) {
    try {
      setLoading(true);
      await api.post('/mix_indication', {
        ...data,
        categoryId: selectedCategory,
        authorId: user?.id,
      });
      navigation.goBack();
      ToastAndroid.show('Enviado com sucesso!', ToastAndroid.SHORT);
    } catch (err) {
      crashlytics().recordError(err);
      if (err.response) {
        if (err.response.data.errors) {
          form.current.setErrors(err.response.data.errors);
        } else {
          ToastAndroid.show(err.response.data.error, ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show(
          'Ocorreu um erro ao cadastrar indicação de mix',
          ToastAndroid.SHORT,
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {isLoading && <LoadingIndicator isAnimating={isLoading} />}

      <SavePageHeader
        navigation={navigation}
        title="Indique um mix"
        onSave={handleSaveButtonPress}
        saveButtonText="ENVIAR"
      />
      <ScrollView>
        {!user && (
          <WarningText>
            Recomendamos que você faça o login para podermos saber quem indicou
            o mix.
          </WarningText>
        )}
        <Form onSubmit={handleFormSubmit} ref={form}>
          <InputContainer>
            <InputLabel color={colors.text}>Nome da essência 1</InputLabel>
            <Input
              name="essence1Name"
              placeholder="Digite o nome da essência 1"
              backgroundColor={colors.inputBackground}
              borderColor={colors.inputBorder}
              textColor={colors.text}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel color={colors.text}>Marca da essência 1</InputLabel>
            <Input
              name="essence1Brand"
              placeholder="Digite a marca da essência 1"
              backgroundColor={colors.inputBackground}
              borderColor={colors.inputBorder}
              textColor={colors.text}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel color={colors.text}>
              Proporção da essência 1 (em %)
            </InputLabel>
            <Input
              name="essence1Proportion"
              placeholder="Digite a proporção da essência 1"
              backgroundColor={colors.inputBackground}
              borderColor={colors.inputBorder}
              keyboardType="numeric"
              textColor={colors.text}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel color={colors.text}>Nome da essência 2</InputLabel>
            <Input
              name="essence2Name"
              placeholder="Digite o nome da essência 2"
              backgroundColor={colors.inputBackground}
              borderColor={colors.inputBorder}
              textColor={colors.text}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel color={colors.text}>Marca da essência 2</InputLabel>
            <Input
              name="essence2Brand"
              placeholder="Digite a marca da essência 2"
              backgroundColor={colors.inputBackground}
              borderColor={colors.inputBorder}
              textColor={colors.text}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel color={colors.text}>
              Proporção da essência 2 (em %)
            </InputLabel>
            <Input
              name="essence2Proportion"
              placeholder="Digite a proporção da essência 2"
              backgroundColor={colors.inputBackground}
              borderColor={colors.inputBorder}
              keyboardType="numeric"
              textColor={colors.text}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel color={colors.text}>Descrição</InputLabel>
            <DescriptionInput
              name="description"
              placeholder="Digite a descrição desse bellisímo mix (Opcional)"
              backgroundColor={colors.inputBackground}
              borderColor={colors.inputBorder}
              multiline
              style={{ textAlignVertical: 'top' }}
              textColor={colors.text}
            />
          </InputContainer>

          <InputCategory>
            <InputLabel color={colors.text}>Categoria do mix</InputLabel>
            <DropDownPicker
              name="categoryId"
              items={categoryList}
              defaultValue={selectedCategory}
              placeholder="Selecione uma categoria"
              containerStyle={{
                height: metrics.inputHeight,
              }}
              dropDownStyle={{
                backgroundColor: colors.inputBackground,
              }}
              labelStyle={{
                color: colors.text,
                fontFamily: fonts.regular,
                fontSize: fonts.regularSize,
              }}
              itemStyle={{ paddingBottom: 0, marginBottom: 3 }}
              backgroundColor={colors.inputBackground}
              onChangeItem={(item) => setSelectedCategory(item.value)}
            />
          </InputCategory>
        </Form>
      </ScrollView>
    </>
  );
};

export default CreateMix;
