import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
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
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function Cart() {
  const { cart, deleteItemFromCart,deleteCart } = useContext(AppContext);
  var total = 0;

  function getTotal() {
    cart.map((item) => (total += item.cantidad * item.precio));
    if (total > 0) {
      return (
        <View style={{ alignItems: "center", marginTop: "2%" }}>
          <Text style={{ fontSize: 24 }}>Total: $ {total} </Text>
          <Button
            title={"Comprar"}
            onPress={() => deleteCart()}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: "center", marginTop: "2%" }}>
          <Text style={{ fontSize: 24 }}>Total: $ {total} </Text>
          <Button
            disabled
            title={"Comprar"}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        </View>
      );
    }
  }

  function cardsRender(item) {
    console.log(item);
    var importe = item.cantidad * item.precio;
    total = total + importe;

    return (
      <Card key={item.codigo}>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Divider />
        <View>
          <Text>Cantidad: {item.cantidad}</Text>
          <Text>Precio: $ {item.precio}</Text>
          <Text>Importe: ${importe}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Icon
              raised
              name="trash"
              type="ionicon"
              color="black"
              onPress={() => deleteItemFromCart(item)}
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
          centerComponent={{
            text: "Carrito de compras",
            style: styles.heading,
          }}
          rightComponent={
            <TouchableOpacity
            onPress={() => deleteCart()}
            >
              <Icon
                name="trash"
                type="ionicon"
                color="red"
              />
            </TouchableOpacity>
          }
        ></Header>
        <ScrollView>
          <ThemeProvider>
            {getTotal()}
            {cart.length > 0 ? (
              cart.map((item) => cardsRender(item))
            ) : (
              <Text style={{ alignSelf: "center" }}>
                El carrito de compras esta vacio
              </Text>
            )}
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
