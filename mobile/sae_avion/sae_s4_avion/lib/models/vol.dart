import 'package:flutter/material.dart';

class Vol {
  final String _nomCompagnie;
  final int _numVol;
  final DateTime _date_heure_depart;
  final DateTime _date_heure_arrivee_prevue;
  final String _terminal_depart;
  final String _terminal_arrivee;
  final String _aeroport_depart;
  final String _aeroport_arrivee;


  Vol(this._nomCompagnie, this._numVol,
    this._date_heure_depart,  this._date_heure_arrivee_prevue,
    this._terminal_depart, this._terminal_arrivee,
    this._aeroport_depart, this._aeroport_arrivee);

  String get nomCompagnie => _nomCompagnie;
  int get numVol => _numVol;
  DateTime get date_heure_depart => _date_heure_depart;
  DateTime get date_heure_arrivee_prevue => _date_heure_arrivee_prevue;
  String get terminal_depart => _terminal_depart;
  String get terminal_arrivee => _terminal_arrivee;
  String get aeroport_depart => _aeroport_depart;
  String get aeroport_arrivee => _aeroport_arrivee;


  static fromJson(Map<String, dynamic> json){
    String nomCompagnie = json['Compagnie']??"";
    int numVol = json['numVol']??0;
    DateTime date_heure_depart = DateTime.parse(json['date_heure_depart'] ?? DateTime.now().toString());
    DateTime date_heure_arrivee_prevue = DateTime.parse(json['date_heure_arrivee_prevue'] ?? DateTime.now().toString());
    String terminal_depart = json['terminal_depart']??"";
    String terminal_arrivee = json["terminal_arrivee"]??"";
    String aeroport_depart = json["aeroport_depart"]??"";
    String aeroport_arrivee = json["aeroport_arrivee"]??"";
    return Vol(nomCompagnie, numVol, date_heure_depart as DateTime, date_heure_arrivee_prevue as DateTime, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee);

  }


}