import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ViewPropTypes from 'deprecated-react-native-prop-types';


const Carrusel = ({ images }) => {
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} resizeMode="contain" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={250}
        layout="default"
        loop
        autoplay
        autoplayInterval={3000}
        autoplayDelay={1000}
      />
    </View>
  );
};

Carrusel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default Carrusel;