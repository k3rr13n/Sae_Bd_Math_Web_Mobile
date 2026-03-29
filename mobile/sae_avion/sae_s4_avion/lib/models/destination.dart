import 'package:flutter/material.dart';
import './vol.dart';

class Ville {
  int idVille;
  int idPays;
  String nomVille;
  List<Vol> vols;


  Ville({required this.idVille, required this.idPays, required this.nomVille, required this.vols});

  List<Ville> generateVille(int i){
    List<Ville> myJourney=[];
    for(int n=0;n<i;n++){
      myJourney.add(Ville(idVille: n, idPays: n, nomVille: "title $n", vols: [Vol("Compagnie", n, DateTime.now(), DateTime.now(), "T1", "T2", "Aero1", "Aero2")]));
    }
    return myJourney;
  }

  static fromJson(Map<String, dynamic> json){
    final vols = <Vol>[];
    final Color clr;

    clr = Colors.lightBlue;

    if(json['vols'] != null){
      json['vols'].forEach((t){
        vols.add(Vol.fromJson(t));
      });
    }

    return Ville(
        idVille: json['id'],
        idPays: json['id'],
        nomVille: json['title'],
        vols: vols
    );

  }


}