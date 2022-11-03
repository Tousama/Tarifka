import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from "./MealCard.style";

const MealCard = ({meal, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: meal.strMealThumb}}/>
                <Text style={styles.text}>{meal.strMeal}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    );
};

export default MealCard;
