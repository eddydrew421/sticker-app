import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

interface People {
    name: string;
    height: string;
    mass: string;
  }

const StarWarsDataSampleFetch = () => {
  const [data, setData] = useState<People[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people');
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  if (!data) {
    return <ThemedText>Loading...</ThemedText>;
  }

  const renderItem = ({ item }: { item: People }) => (
    <ThemedView>
      <ThemedText>Name: {item.name}</ThemedText>
      <ThemedText>Height: {item.height}</ThemedText>
      <ThemedText>Mass: {item.mass}</ThemedText>
    </ThemedView>
  );

  return (
    <FlatList 
        data={data} 
        renderItem={renderItem}
        keyExtractor={(item) => item.name.toString()}
    /> 
  );
};

export default StarWarsDataSampleFetch;
