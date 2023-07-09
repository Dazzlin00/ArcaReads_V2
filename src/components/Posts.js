import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Post = ({ username, timestamp, text, image, postImage }) => {
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/panda.jpg")}
          style={styles.avatar}
        />

        <Text style={styles.username}>Eliza Graterol</Text>
      </View>
      <Text style={styles.text}>Hola Mundo</Text>

      {
        <Image
          source={require("../../assets/panda.jpg")}
          style={styles.postImage}
        />
      }

      <View style={styles.footer}>
        <View style={styles.footerButtonsContainer}>
          <View style={styles.footerButton}>
            <Button
              icon={<FontAwesomeIcon icon={faHeart} size={25} />}
              buttonStyle={{
                backgroundColor: "transparent",
                justifyContent: "flex-start",
              }}
            />

            <Text style={styles.buttonCount}>500</Text>
          </View>

          <View style={styles.footerButton}>
            <Button
              icon={<Icon name="comment" size={20} color="#3b5998" />}
              title="Comment"
              titleStyle={styles.buttonTitle}
              type="clear"
            />
            <Text style={styles.buttonCount}>50</Text>
          </View>
        </View>
      </View>

      <Text style={styles.timestamp}>{timestamp}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  footerButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTitle: {
    color: "#3b5998",
    marginLeft: 5,
  },
  buttonCount: {
    marginLeft: 5,
    color: "gray",
  },
  timestamp: {
    color: "gray",
    fontSize: 12,
    marginHorizontal: 10,
    marginBottom: 5,
  },
});

export default Post;