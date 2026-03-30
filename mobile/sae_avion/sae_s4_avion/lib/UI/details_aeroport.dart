import '../models/aeroport.dart';
import '../models/vol.dart';
import '../api/MyAPI.dart';
import 'package:flutter/material.dart';

class DetailScreenAeroport extends StatelessWidget {
  final Aeroport aeroport;
  final MyAPI myAPI = MyAPI();

  DetailScreenAeroport({super.key, required this.aeroport});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Destinations de ${aeroport.nomAeroport}"),
        backgroundColor: Colors.red[600],
      ),
      body: FutureBuilder<List<Vol>>(
        future: myAPI.getVols(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) return CircularProgressIndicator();
          final destinationsPossibles = snapshot.data!
              .where((vol) => vol.aeroport_depart == aeroport.nomAeroport)
              .map((vol) => vol.aeroport_arrivee)
              .toSet(); // toSet() pour éviter les doublons

          return ListView.builder(
            itemCount: destinationsPossibles.length,
            itemBuilder: (context, index) {
              final nomDestination = destinationsPossibles.elementAt(index);
              return ListTile(
                title: Text(nomDestination),
                leading: Icon(Icons.flight_land),
              );
            },
          );
        },
      ),
    );
  }
}