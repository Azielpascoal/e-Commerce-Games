import React, { useEffect ,useState} from "react";
import {} from "./style";
import { View,Text,TouchableOpacity,Image,ScrollView} from "react-native";
import Products from "../services/products.json";


export default function Home() {
   

  const [products,setProducts]= useState([])
  useEffect(() => {
    const AllProducts = Products.map((product) => {
      return product        
    })
    setProducts(AllProducts)
  }, [products]);

  return (    
      <ScrollView style={{backgroundColor:'#fff',flex:1}} horizontal={true}>
          {
            products.map((index,key)=>{              
              return(
                <View style={{ width:300,height:300,borderColor:'#f1f1f1',borderWidth:1,alignItems:'center',justifyContent:'center',alignSelf:'center',marginRight:15}} key={key}>
                
                  <Image style={{width:150,height:150}}  source={ require(`../assets/`+`${index.image}`)}/>
                  <Text>Nome do jogo: {index.name}</Text>
                  <Text>Preço :${index.price}</Text>
                  <Text>Pontuação :{index.score}</Text>
                  <TouchableOpacity style={{backgroundColor:'#ff0f0f',width:140,height:20,alignItems:'center',borderRadius:10}}>
                      <Text>ADD TO CAR</Text>
                  </TouchableOpacity>
                </View>
               )
            })
          } 
      </ScrollView>
  )
}
