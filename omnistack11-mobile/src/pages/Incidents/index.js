import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadIncidents() {
    // Evitar fazer loading quando outro loading já esta sendo feito
    if (loading) {
      return;
    }

    // Se total igual aos carregados, nao carregar mais
    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    try {
      const response = await api.get("incidents", {
        params: { page }
      });

      // console.log(response);

      setIncidents([...incidents, ...response.data]); // Apenda os novos incidents na lista atual
      setTotal(response.headers["x-total-count"]);
      setPage(page + 1);
      setLoading(false);
    } catch (err) {
      alert("Erro ao buscar incidentes!");
      alert(err.message);
      console.error(err);
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident }); // Mesmo nome em Routes
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
          </Text>
        </View>

        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.description}>
          Escolha um dos casos abaixo e salve o dia.
        </Text>

        <FlatList
          style={styles.incidentList}
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: incident }) => (
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(incident.value)}
              </Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {
                  navigateToDetail(incident);
                }}
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
