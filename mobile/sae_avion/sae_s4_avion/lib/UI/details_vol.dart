import '../models/vol.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class DetailScreenVol extends StatelessWidget {
  final Vol vol;
  const DetailScreenVol({super.key, required this.vol});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Détails du vol")),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text(
            "${vol.nomCompagnie} - Vol ${vol.numVol}",
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),

          ListTile(
            leading: Icon(Icons.flight_takeoff),
            title: Text("Départ"),
            subtitle: Text("${vol.aeroport_depart} (Terminal ${vol.terminal_depart})"),
            trailing: Text(DateFormat('HH:mm').format(vol.date_heure_depart)),
          ),
          ListTile(
            leading: Icon(Icons.flight_land),
            title: Text("Arrivée"),
            subtitle: Text("${vol.aeroport_arrivee} (Terminal ${vol.terminal_arrivee})"),
            trailing: Text(DateFormat('HH:mm').format(vol.date_heure_arrivee_prevue)),
          ),
          ListTile(
            leading: Icon(Icons.calendar_today),
            title: Text("Date du vol"),
            subtitle: Text(DateFormat('dd/MM/yyyy').format(vol.date_heure_depart)),
          ),

          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(
              "Informations complémentaires : Ce vol est géré par la compagnie ${vol.nomCompagnie}.",
              style: TextStyle(fontStyle: FontStyle.italic, color: Colors.grey[600]),
            ),
          ),
        ],
      ),
    );
  }
}