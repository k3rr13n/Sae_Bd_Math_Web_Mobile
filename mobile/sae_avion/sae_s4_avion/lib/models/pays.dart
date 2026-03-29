import 'package:flutter/material.dart';
import './destination.dart';


class Pays {
  final int idPays;
  final String nomPays;

  Pays({required this.idPays, required this.nomPays});

  factory Pays.fromJson(Map<String, dynamic> json) {
    return Pays(
      idPays: json['id_pays'],
      nomPays: json['nom_pays'] ?? '',
    );
  }

  Map<String, dynamic> toJson() => {
    'id_pays': idPays,
    'nom_pays': nomPays,
  };
}