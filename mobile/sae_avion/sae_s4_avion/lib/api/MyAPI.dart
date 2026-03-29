import 'package:flutter/services.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/aeroport.dart';
import '../models/destination.dart'; 
import '../models/vol.dart';
import '../models/pays.dart';
import '../models/terminal.dart';

class MyAPI{
  final String URL = 'http://localhost:5000/api';
  Future<List<Aeroport>> getAeroports() async{
    
    final response = await http.get(
        Uri.parse('$URL/aeroports'));
    if (response.statusCode == 200) {
      final List<dynamic> json = jsonDecode(response.body);

      final aeroports = <Aeroport>[];
      for (var element in json){
        aeroports.add(Aeroport.fromJson(element));
      }
      return aeroports;
    }else{
      throw Exception('Failed to load aeroports');
    }
  }

  Future<List<Ville>> getVilles() async{
  final response = await http.get(Uri.parse('$URL/villes'));
  
  if (response.statusCode == 200) {
    final List<dynamic> json = jsonDecode(response.body);
    final villes = <Ville>[];
    for (var element in json) {
      villes.add(Ville.fromJson(element));
    }
    return villes;
  }else{
    throw Exception('Failed to load villes');
    }
  }

  Future<List<Vol>> getVols() async{
  final response = await http.get(Uri.parse('$URL/vols'));
  
  if(response.statusCode == 200) {
    final List<dynamic> json = jsonDecode(response.body);
    final vols = <Vol>[];
    for (var element in json) {
      vols.add(Vol.fromJson(element));
    }
    return vols;
  }else{
    throw Exception('Failed to load vols');
    }
  }
  Future<List<Pays>> getPays() async{
  final response = await http.get(Uri.parse('$URL/pays'));
  
  if(response.statusCode == 200){
    final List<dynamic> json = jsonDecode(response.body);
    final paysList = <Pays>[];
    for(var element in json) {
      paysList.add(Pays.fromJson(element));
    }
    return paysList;
  }else{
    throw Exception('Failed to load pays');
    }
  }

  Future<List<Terminal>> getTerminaux() async{
  final response = await http.get(Uri.parse('$URL/terminaux'));
  
  if(response.statusCode == 200) {
    final List<dynamic> json = jsonDecode(response.body);
    final terminaux = <Terminal>[];
    for (var element in json) {
      terminaux.add(Terminal.fromJson(element));
    }
    return terminaux;
  } else{
    throw Exception('Failed to load terminaux');
    }
  }




}