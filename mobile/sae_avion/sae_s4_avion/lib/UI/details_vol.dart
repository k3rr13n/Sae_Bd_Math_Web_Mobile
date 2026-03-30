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
        children: [Text("Numéro du vol : ${vol.numVol}"),
        Text("Compagnie de ce vol : ${vol.nomCompagnie}")]
      ),
    );
  }
}
