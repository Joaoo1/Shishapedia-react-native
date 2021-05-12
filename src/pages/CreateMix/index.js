import { useEffect, useRef, useState } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import crashlytics from '@react-native-firebase/crashlytics';

import SavePageHeader from '../../components/SavePageHeader';
import LoadingIndicator from '../../components/LoadingIndicator';
import Input from '../../components/FormInput';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import { useTheme } from '../../hooks/theme';

import { fonts, metrics } from '../../styles';
import {
  Form,
  InputCategory,
  DropDownPicker,
  InputLabel,
  WarningText,
  DescriptionInput,
} from './styles';

const CreateMix = () => {
  const { user } = useAuth();
  const { colors } = useTheme();
  const navigation = useNavigation();

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
        title="Indique um mix"
        saveButtonText="ENVIAR"
        onSave={handleSaveButtonPress}
      />
      <ScrollView>
        {!user && (
          <WarningText>
            Recomendamos que você faça o login para podermos saber quem indicou
            o mix.
          </WarningText>
        )}
        <Form onSubmit={handleFormSubmit} ref={form}>
          <Input
            label="Nome da essência 1"
            name="essence1Name"
            placeholder="Digite o nome da essência 1"
          />
          <Input
            label="Marca da essência 1"
            name="essence1Brand"
            placeholder="Digite a marca da essência 1"
          />
          <Input
            label=" Proporção da essência 1 (em %)"
            name="essence1Proportion"
            placeholder="Digite a proporção da essência 1"
            keyboardType="numeric"
          />
          <Input
            label="Nome da essência 2"
            name="essence2Name"
            placeholder="Digite o nome da essência 2"
          />
          <Input
            label="Marca da essência 2"
            name="essence2Brand"
            placeholder="Digite a marca da essência 2"
          />
          <Input
            label="Proporção da essência 2 (em %)"
            name="essence2Proportion"
            placeholder="Digite a proporção da essência 2"
            keyboardType="numeric"
          />
          <DescriptionInput
            label="Descrição"
            name="description"
            placeholder="Digite a descrição desse bellisímo mix (Opcional)"
            multiline
            style={{ textAlignVertical: 'top' }}
          />
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
              onChangeItem={(item) => setSelectedCategory(item.value)}
              backgroundColor={colors.inputBackground}
            />
          </InputCategory>
        </Form>
      </ScrollView>
    </>
  );
};

export default CreateMix;
