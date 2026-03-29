import 'package:flutter/services.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/aeroport.dart';

class MyAPI{

  Future<List<Aeroport>> getAeroports() async{
    final response = await http.get(
        Uri.parse(''));
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

}