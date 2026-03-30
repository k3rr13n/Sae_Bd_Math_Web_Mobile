import 'package:flutter/material.dart';
import './destination.dart';

class Aeroport {
  int idVille;
  String nomAeroport;
  List<Ville> destinations;


  Aeroport({required this.idVille,
    required this.nomAeroport,
    required this.destinations
  });

  List<Aeroport> generateAeroport(int i){
    List<Aeroport> myJourney =[];
    for (int n = 0; n < i; n++){
      myJourney.add(
        Aeroport(
          idVille: n,
          nomAeroport: "Aeroport $n",
          destinations: [
            Ville(idVille: n, idPays: n, nomVille: "Ville $n", aeroports: []),
          ],
        ),
      );
    }
    return myJourney;
  }

  static Aeroport fromJson(Map<String, dynamic> json) {
    // Map the raw dynamic list to a List<Ville>
    var list = json['destinations'] as List? ?? [];
    List<Ville> destinationsList = list.map<Ville>((i) => Ville.fromJson(i)).toList();

    return Aeroport(
      nomAeroport: json['nom_aeroport'],
      idVille: json['id_ville'],
      destinations: destinationsList,
    );
  }
}