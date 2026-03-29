import 'package:flutter/material.dart';
import './destination.dart';

class Aeroport {
  int idVille;
  String nomAeroport;
  List<Ville> villes;


  Aeroport({required this.idVille,required this.nomAeroport,required this.villes});

  List<Aeroport> generateAeroport(int i){
    List<Aeroport> myJourney =[];
    for (int n = 0; n < i; n++){
      myJourney.add(
        Aeroport(
          idVille: n,
          nomAeroport: "Aeroport $n",
          villes: [
            Ville(idVille: n, idPays: n, nomVille: "Ville $n", vols: []),
          ],
        ),
      );
    }
    return myJourney;
  }

  static Aeroport fromJson(Map<String, dynamic> json) {
    // Map the raw dynamic list to a List<Ville>
    var list = json['villes'] as List? ?? [];
    List<Ville> villesList = list.map<Ville>((i) => Ville.fromJson(i)).toList();
    
    return Aeroport(
      idVille: json['idVille'] ?? 0,
      nomAeroport: json['nomAeroport'] ?? '',
      villes: villesList,
    );
  }
}