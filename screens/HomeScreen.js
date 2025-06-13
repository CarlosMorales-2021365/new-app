import {  StatusBar } from "react-native-web";
import { FlatList, StyleSheet, Text, View } from "react-native";

const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg' },
    { id: 2, name: 'Product 2', price: 100, image: 'https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg' },
    { id: 3, name: 'Product 3', price: 100, image: 'https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg' },
]

const HomeScreen = () => {
    return (
        <View style={styles.container}> 
            <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> (
                <View style={styles.product}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.image}</Text>
                </View>
            )}
            />
        </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
})