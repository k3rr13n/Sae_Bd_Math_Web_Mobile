import 'package:flutter/material.dart';

class Vol {
  final String nomCompagnie;
  final int numVol;
  final DateTime date_heure_depart;
  final DateTime date_heure_arrivee_prevue;
  final String terminal_depart;
  final String terminal_arrivee;
  final String aeroport_depart;
  final String aeroport_arrivee;

  Vol({
    required this.nomCompagnie,
    required this.numVol,
    required this.date_heure_depart,
    required this.date_heure_arrivee_prevue,
    required this.terminal_depart,
    required this.terminal_arrivee,
    required this.aeroport_depart,
    required this.aeroport_arrivee,
  });

  factory Vol.fromJson(Map<String, dynamic> json) {
    return Vol(
      nomCompagnie: json['nom_compagnie'] ?? 'Inconnu',
      numVol: json['numero_vol'] ?? 0,
      date_heure_depart: json['date_heure_depart'] != null 
        ? DateTime.parse(json['date_heure_depart']) 
        : DateTime.now(),
        
      date_heure_arrivee_prevue: json['date_heure_arrivee_prevue'] != null 
        ? DateTime.parse(json['date_heure_arrivee_prevue']) 
        : DateTime.now(),
      terminal_depart: json['nom_terminal_1'] ?? 'Inconnu',
      terminal_arrivee: json['nom_terminal_2'] ?? 'Inconnu',
      aeroport_depart: json['nom_aeroport_1'] ?? 'Inconnu',
      aeroport_arrivee: json['nom_aeroport_2'] ?? 'Inconnu',
    );
  }
}