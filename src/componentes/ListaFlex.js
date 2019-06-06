import React from "react";
import { ScrollView, View, FlatList, Text } from "react-native";

const alunos = [
  { id: 1, nome: "João", nota: 7.9 },
  { id: 2, nome: "João", nota: 3.9 },
  { id: 3, nome: "João", nota: 4.4 },
  { id: 4, nome: "João", nota: 7.4 },
  { id: 5, nome: "João", nota: 4.3 },
  { id: 6, nome: "João", nota: 8.4 },
  { id: 7, nome: "João", nota: 1.4 },
  { id: 8, nome: "João", nota: 7.6 },
  { id: 9, nome: "João", nota: 10.0 },
  { id: 10, nome: "João", nota: 10.0 },

  { id: 11, nome: "João", nota: 7.9 },
  { id: 12, nome: "João", nota: 3.9 },
  { id: 13, nome: "João", nota: 4.4 },
  { id: 14, nome: "João", nota: 7.4 },
  { id: 15, nome: "João", nota: 4.3 },
  { id: 16, nome: "João", nota: 8.4 },
  { id: 17, nome: "João", nota: 1.4 },
  { id: 18, nome: "João", nota: 7.6 },
  { id: 19, nome: "João", nota: 10.0 },
  { id: 20, nome: "João", nota: 10.0 }
];

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: "#DDD",
  borderWidth: 0.5,
  borderColor: "#222",
  // Flex

  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
};

export const Aluno = props => (
  <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{ fontWeight: "bold" }}>Nota: {props.nota}</Text>
  </View>
);

export default props => {
  const renderItem = ({ item }) => {
    return <Aluno {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
