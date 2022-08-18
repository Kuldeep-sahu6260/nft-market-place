
import { View, SafeAreaView, FlatList,Text } from "react-native";
import React,{useState} from "react";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../constants";

const Home = () => {
  const [nft, setNft] = useState(NFTData);

  const handleSearch = (values)=>{
    if(values.length == 0){
        setNft(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(values.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNft(NFTData);
    } else {
      setNft(filteredData);
    }

  }
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <FocusedStatusBar backgroundColor={COLORS.primary} />
          <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
              <FlatList
                data={nft}
                renderItem={({ item }) => <NFTCard data={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
              />
            </View>
    
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1,
              }}
            >
              <View
                style={{ height: 300, backgroundColor: COLORS.primary }} />
              <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
          </View>
        </SafeAreaView>
      );
    };


export default Home;