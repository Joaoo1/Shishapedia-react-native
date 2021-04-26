import { useState, useEffect } from 'react';
import { View, Image, Text, SafeAreaView, ScrollView } from 'react-native';
import ImageView from 'react-native-image-viewing';

import { FormatDate } from '../../helpers/FormatDate';
import PageHeader from '../../components/DrawerPageHeader';

import styles from './styles';
import api from '../../services/api';

const NarguileInfo = ({ route }) => {
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
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View
            style={styles.imageContainer}
            onTouchEnd={() => setShowImage(true)}
          >
            <Image source={imagesUri[0]} style={styles.image} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.narguileName}>{narguile.name}</Text>
            {narguile.release_date !== null && (
              <Text style={styles.descriptionText}>
                {`Data da lançamento: ${narguile.release_date}`}
              </Text>
            )}
            <Text style={styles.descriptionText}>{narguile.description}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NarguileInfo;
