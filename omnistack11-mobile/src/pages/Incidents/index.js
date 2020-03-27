import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("Detail"); // Mesmo nome em Routes
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>0 casos</Text>.
          </Text>
        </View>

        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.description}>
          Escolha um dos casos abaixo e salve o dia.
        </Text>

        <FlatList
          style={styles.incidentList}
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={incident => String(incident)}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>APAD</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>Caso teste</Text>

              <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
              <Text style={styles.incidentValue}>dESCRICAO TESTE</Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={navigateToDetail}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02141" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
}
