import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FAB } from "react-native-elements";
import { AppContext } from "../Context/Context";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  ThemeProvider,
  Header,
} from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const { catalogo, changeStatus, addToCart } = useContext(AppContext);

  function cardsRender(item) {
    var color;
    item.desactivado == true ? (color = "red") : (color = "gray");
    return (
      <Card key={item.codigo}>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Divider />
        <View>
          <Text>Precio: $ {item.precio}</Text>
          <Text>{item.idioma}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Icon
              raised
              name="shopping-cart"
              type="FontAwesome5"
              color="green"
              onPress={() => addToCart(item)}
            />
            <Icon
              raised
              name="heart"
              type="ionicon"
              color={color}
              onPress={() => changeStatus(item)}
            />
          </View>
        </View>
      </Card>
    );
  }
  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView>
          <Header
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
            centerComponent={{ text: "Libreria", style: styles.heading }}
          ></Header>
          <ThemeProvider>
            {catalogo.map((item) => cardsRender(item))}
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
