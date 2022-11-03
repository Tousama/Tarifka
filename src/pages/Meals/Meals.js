import { FILTER_URL } from "@env";
import React from 'react';
import { FlatList, View } from 'react-native';
import MealCard from "../../components/cards/MealCard/MealCard";
import Loading from "../../components/Loading";
import useFetch from '../../hooks/useFetch';
import styles from "./Meals.style";

const Meals = ({route, navigation}) => {
    const strCategory = route.params.strCategory;
    
    const {data, loading, error} = useFetch(FILTER_URL+"="+strCategory)

    const handleMealSelect = (strMeal) => {
        navigation.navigate("Detail", strMeal)
    }

    const renderMeal = ({item}) => <MealCard meal={item} onSelect={()=>handleMealSelect(item.strMeal)}/>;

    if (loading) {
        return <Loading/>
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
                keyExtractor={(item, index) => item.idMeal}
            />
        </View>
    );
};

export default Meals;