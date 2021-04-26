import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import {
  Text,
  View,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import crashlytics from '@react-native-firebase/crashlytics';

import Input from '../../components/Input';
import SavePageHeader from '../../components/SavePageHeader';
import { useAuth } from '../../hooks/auth';

import styles from './styles';
import api from '../../services/api';
import { colors } from '../../styles';

const CreateMix = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
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
      {isLoading && (
        <ActivityIndicator
          style={styles.loading}
          size="large"
          animating={isLoading}
          color={colors.accentColor}
        />
      )}

      <SavePageHeader
        navigation={navigation}
        title="Indique um mix"
        onSave={handleSaveButtonPress}
        saveButtonText="ENVIAR"
      />
      <ScrollView>
        {!user && (
          <Text style={styles.warningText}>
            Recomendamos que você faça o login para podermos saber quem indicou
            o mix.
          </Text>
        )}
        <Form onSubmit={handleFormSubmit} style={styles.form} ref={form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome da essência 1</Text>
            <Input
              name="essence1Name"
              style={styles.input}
              placeholder="Digite o nome da essência 1"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Marca da essência 1</Text>
            <Input
              name="essence1Brand"
              style={styles.input}
              placeholder="Digite a marca da essência 1"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Proporção da essência 1 (em %)
            </Text>
            <Input
              name="essence1Proportion"
              style={styles.input}
              placeholder="Digite a proporção da essência 1"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome da essência 2</Text>
            <Input
              name="essence2Name"
              style={styles.input}
              placeholder="Digite o nome da essência 2"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Marca da essência 2</Text>
            <Input
              name="essence2Brand"
              style={styles.input}
              placeholder="Digite a marca da essência 2"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Proporção da essência 2 (em %)
            </Text>
            <Input
              name="essence2Proportion"
              style={styles.input}
              placeholder="Digite a proporção da essência 2"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Descrição</Text>
            <Input
              name="description"
              style={[styles.input, styles.descriptionInput]}
              placeholder="Digite a descrição desse bellisímo mix (Opcional)"
              multiline
            />
          </View>

          <View style={[styles.inputContainer, styles.inputCategory]}>
            <Text style={styles.inputLabel}>Categoria do mix</Text>
            <DropDownPicker
              name="categoryId"
              items={categoryList}
              defaultValue={selectedCategory}
              placeholder="Selecione uma categoria"
              containerStyle={styles.dropdownContainer}
              style={styles.input}
              onChangeItem={(item) => setSelectedCategory(item.value)}
            />
          </View>
        </Form>
      </ScrollView>
    </>
  );
};

export default CreateMix;
