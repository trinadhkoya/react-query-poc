import { ActivityIndicator, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "./product.service";
import ProductItem from "./ProductItem";

function ProdList() {
  // Queries
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts
  });

  if (query.isLoading || query.isFetching) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => <ProductItem item={item}></ProductItem>;

  return (
    <FlatList
      horizontal={false}
      data={query?.data?.products}
      renderItem={renderItem}
    ></FlatList>
  );
}
export default ProdList;
