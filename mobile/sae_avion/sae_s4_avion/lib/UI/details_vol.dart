import '../models/vol.dart';
import 'package:flutter/material.dart';



class DetailScreenVol extends StatelessWidget {
  // In the constructor, require a Todo.
  const DetailScreenVol({super.key, required this.vol});

  // Declare a field that holds the Todo.
  //final Todo todo;
  final Vol vol;

  @override
  Widget build(BuildContext context) {
    // Use the Todo to create the UI.
    return Scaffold(
      appBar: AppBar(title: Text(vol.nomCompagnie)),
      body: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
        children: [Text("Numéro du vol : ${vol.numVol}"),
          Text("Compagnie de ce vol : ${vol.nomCompagnie} \n"),
          Row(
              children: [Text("Aéroport de départ : ${vol.aeroport_depart},  "),
                Text("Aéroport d'arrivée : ${vol.aeroport_arrivee}")]
          ),
          Row(
            children: [Text("Date et heure de départ : ${vol.date_heure_depart},  "),
              Text("Date et heure d'arrivée : ${vol.date_heure_arrivee_prevue}")],
          ),
          Row(
            children: [Text("Heure de départ : ${vol.date_heure_depart},  "),
              Text("Heure de départ : ${vol.date_heure_depart}")]
          ),
          Row(
              children: [Text("Terminal de départ : ${vol.terminal_depart},  "),
                Text("Terminal d'arrivée : ${vol.terminal_arrivee}")]
          )
        ]
      ),
    );
  }
}
