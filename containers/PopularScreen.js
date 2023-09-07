import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, FlatList, Image, StyleSheet } from "react-native";

const PopularScreen = () => {
    const [movieInfos, setMovieInfos] = useState([])
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFkNjQ2YzRmMzdmODAwMTQ5ZmMzYjciLCJlbWFpbCI6ImhhcmRpdGFidW5hQGdtYWlsLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyNC0wMS0wNVQyMzowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNjk0MDg4MDcwfQ.Hfi7z8U4DXvoKuO0uWYoq6kyN0wq3hxH26Bti06zzbg";

            const response = await axios.get(
                `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/popular`, {
                    headers: {
                    'Authorization': `Bearer ${token}` 
                    }
                });
  
          console.log(response);
          setMovieInfos(response.data.results);
          setIsLoading(false);
        } catch (error) {
          console.log("catch Room>>>", error);
        }
      };
  
      fetchData();
    }, []);

    return isLoading ? (
      <ActivityIndicator />
    ) : (
      <View>
        <FlatList 
            data={movieInfos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                console.log(item.poster_path.w185)
                return (
                    <View>
                        <Image source={{ uri: item.poster_path.w185 }} style={styles.container}/>
                        <Text> {item.title} </Text>
                    </View>
                )
            }}
            />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
  });

  export default PopularScreen;