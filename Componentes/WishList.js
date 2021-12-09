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

export default function WishList() {
  const { wishList, changeStatus,addToCart } = useContext(AppContext);

  function cardsRender(item) {
    console.log(item);
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
              name="trash"
              type="ionicon"
              color='black'
                onPress={() => changeStatus(item)}
            />
          </View>
        </View>
      </Card>
    );
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header
          containerStyle={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          centerComponent={{ text: "WishList", style: styles.heading }}
        ></Header>
        <ScrollView>
          <ThemeProvider>
          {console.log(wishList.length)}
            {
            wishList.length>0 ?  wishList.map((item) => cardsRender(item)) : <Text style={{alignSelf:"center"}}>No cuentas con libros en tu WishList</Text>
            }
          </ThemeProvider>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
