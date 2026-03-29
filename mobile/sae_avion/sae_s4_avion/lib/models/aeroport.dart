import 'package:flutter/material.dart';
import './destination.dart';

class Aeroport {
  int idVille;
  String nomAeroport;
  List<Ville> villes;


  Aeroport({required this.idVille,required this.nomAeroport,required this.villes});

  List<Aeroport> generateAeroport(int i){
    List<Aeroport> myJourney=[];
    for(int n=0;n<i;n++){
      myJourney.add(Aeroport(idVille: n, nomAeroport: "title $n", villes: ['ville $n';'ville ${n+1}']));
    }
    return myJourney;
  }

  static fromJson(Map<String, dynamic> json){
    final villes = <String>[];
    final Color clr;

    clr = Colors.lightBlue;

    if(json['villes'] != null){
      json['villes'].forEach((t){
        villes.add(t);
      });
    }

    return Aeroport(
        idVille: json['idVille'],
        nomAeroport: json['nomAeroport'],
        villes: villes
    );

  }


}