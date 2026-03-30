import 'package:flutter/material.dart';
import './destination.dart';



class Compagnie {
  final String nomCompagnie;

  Compagnie({required this.nomCompagnie});

  factory Compagnie.fromJson(Map<String, dynamic> json) {
    return Compagnie(
      nomCompagnie: json['nom_compagnie'],
    );
  }

  Map<String, dynamic> toJson() => {
    'nom_compagnie': nomCompagnie,
  };
}