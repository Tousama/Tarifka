import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from "./CategoryCard.style";

const CategoryCard = ({categories, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style = {styles.container}>
                <Image style={styles.image} source={{uri: categories.strCategoryThumb}}/>
                <Text style={styles.text}>{categories.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CategoryCard;