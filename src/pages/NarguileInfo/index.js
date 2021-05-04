import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import ImageView from 'react-native-image-viewing';

import { FormatDate } from '../../helpers/FormatDate';
import PageHeader from '../../components/DrawerPageHeader';
import api from '../../services/api';

import {
  Container,
  ImageContainer,
  Image,
  NarguileName,
  InfoContainer,
  DescriptionText,
} from './styles';
import { useTheme } from '../../hooks/theme';

const NarguileInfo = ({ route }) => {
  const { colors } = useTheme();
  const [narguile, setNarguile] = useState({});
  const [showImage, setShowImage] = useState(false);
  const [imagesUri, setImagesUri] = useState([]);

  useEffect(() => {
    const { release_date: releaseDate, images } = route.params.narguile;
    if (releaseDate) {
      const fomartedReleaseDate = FormatDate(
        route.params.narguile.release_date,
      );
      setNarguile({
        ...route.params.narguile,
        release_date: fomartedReleaseDate,
      });
    } else {
      setNarguile(route.params.narguile);
    }

    async function fetchImages() {
      const response = await api.post('/narguile_images', {
        images,
      });
      setImagesUri(response.data.map((url) => ({ uri: url })));
    }

    fetchImages();
  }, []);

  return (
    <>
      <PageHeader backButton title="Informações" notifications={false} />
      <ImageView
        images={imagesUri}
        imageIndex={0}
        visible={showImage}
        onRequestClose={() => setShowImage(false)}
      />
      <Container>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageContainer
            backgroundColor={colors.imageGrayBackground}
            onTouchEnd={() => setShowImage(true)}
          >
            <Image source={imagesUri[0]} resizeMode="contain" />
          </ImageContainer>
          <InfoContainer backgroundColor={colors.white}>
            <NarguileName color={colors.text}>{narguile.name}</NarguileName>
            {narguile.release_date !== null && (
              <DescriptionText color={colors.text}>
                {`Data da lançamento: ${narguile.release_date}`}
              </DescriptionText>
            )}
            <DescriptionText color={colors.text}>
              {narguile.description}
            </DescriptionText>
          </InfoContainer>
        </ScrollView>
      </Container>
    </>
  );
};

export default NarguileInfo;
