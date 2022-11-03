import { CATEGORIES } from "@env";
import React from 'react';
import { FlatList, View } from 'react-native';
import CategoryCard from "../../components/cards/CategoryCard";
import Loading from "../../components/Loading";
import useFetch from '../../hooks/useFetch';
import styles from "./Categories.style";

const Categories = ({navigation}) => {

    const handleCategoriesSelect = (strCategory) => {
        navigation.navigate("Meals", {strCategory})
    }

    const {data, loading, error} = useFetch(CATEGORIES);

    const renderCategory = ({item}) => <CategoryCard categories = {item} onSelect={() => handleCategoriesSelect(item.strCategory)}/>;
    
    if (loading) {
        return <Loading/>
    }
  
    return(
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => item.idCategory}
                data={data.categories}
                renderItem={renderCategory}
            />
        </View>
    );
};

export default Categories;