import 'package:flutter/material.dart';
import './destination.dart';


class Terminal {
  final String nomAeroport;
  final String nomTerminal;

  Terminal({required this.nomAeroport, required this.nomTerminal});

  factory Terminal.fromJson(Map<String, dynamic> json) {
    return Terminal(
      nomAeroport: json['nom_aeroport'],
      nomTerminal: json['nom_terminal'],
    );
  }

  Map<String, dynamic> toJson() => {
    'nom_aeroport': nomAeroport,
    'nom_terminal': nomTerminal,
  };
}