import { View, Text, Image, StyleSheet } from "react-native";

function ProductItem({ item }) {
  console.log(item);

  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.thumbnail }} style={styles.image}></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  title: { alignSelf: "center", textAlign: "center" },
  image: { height: 100, width: 100 },
});
export default ProductItem;
