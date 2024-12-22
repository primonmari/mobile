import { FlatList } from "react-native";
import { Category } from "../category";
import {s} from "./styles"
    export type CategoriesProps = {
        id: string
        name: string
    }[]

    type Props ={
        data: CategoriesProps
        selected: string
        onSelect: (id: string) => void //Tipagaem de método que não retorna nada: O método recebe um id como parametro, não retorna nada void
    }

    export function Categories({data, selected, onSelect}: Props){
        // console.log(data)
    
        return (
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => ( 
                <Category 
                name={item.name} 
                iconId={item.id} 
                onPress={()=> onSelect(item.id)}
                isSelected={item.id === selected}
                />
            )}
                horizontal
                showsHorizontalScrollIndicator={false} //remove barra rolagem
                contentContainerStyle={s.content}
                style={s.container}
                
                    
        />  
        )
}

