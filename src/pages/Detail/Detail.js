import { SEARCH_URL } from "@env";
import React from 'react';
import { Alert, FlatList, Linking, View } from 'react-native';
import DetailCard from "../../components/cards/DetailCard";
import Loading from "../../components/Loading";
import useFetch from '../../hooks/useFetch';

const Detail = ({route}) => {
    const strMeal = route.params;

    const {data, loading, error} = useFetch(SEARCH_URL+"="+strMeal); 

    const goToYoutube = (url) => {
        try {
            Linking.openURL(url);
        }
        catch {
            Alert.alert("No video!");
        }
    }
    
    const renderDetail = ({item}) => <DetailCard detail={item} openYoutube={()=> goToYoutube(item.strYoutube)}/>

    if (loading) {
        return <Loading/>
    }

    return(
        <View>
            <FlatList
                data={data.meals}
                renderItem={renderDetail}
            />
        </View>
    );
};

export default Detail;