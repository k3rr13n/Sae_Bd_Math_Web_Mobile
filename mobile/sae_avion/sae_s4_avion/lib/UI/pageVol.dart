import 'package:flutter/material.dart';
import '../api/MyAPI.dart';

class pageVol extends StatelessWidget {
  final MyAPI myAPI = MyAPI();
  pageVol({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: myAPI.getVols(),
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.done && !snapshot.hasData) {
          return const Center(child: CircularProgressIndicator());
        }
        if (snapshot.hasError) return Center(child: Text(snapshot.error.toString()));

        if (snapshot.data != null) {
          return ListView.builder(
            itemCount: snapshot.data?.length ?? 0,
            itemBuilder: (BuildContext context, index) {
              var vol = snapshot.data![index];
              return Card(
                elevation: 7,
                color: Colors.green[600],
                margin: const EdgeInsets.all(10),
                child: ListTile(
                  leading: CircleAvatar(
                    backgroundColor: Colors.green[300],
                    child: Text(vol.numVol.toString()),
                  ),
                  title: Text("${vol.nomCompagnie} - Vol ${vol.numVol}"),
                  subtitle: Text("De: ${vol.aeroport_depart} vers ${vol.aeroport_arrivee}"),
                  trailing: IconButton(icon: const Icon(Icons.edit), onPressed: () {}),
                ),
              );
            },
          );
        }
        return const Center(child: Column(mainAxisAlignment: MainAxisAlignment.center));
      },
    );
  }
}