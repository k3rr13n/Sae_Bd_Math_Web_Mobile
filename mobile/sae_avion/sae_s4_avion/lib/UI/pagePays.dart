import 'package:flutter/material.dart';
import '../api/MyAPI.dart';

class pagePays extends StatelessWidget {
  final MyAPI myAPI = MyAPI();
  pagePays({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: myAPI.getPays(),
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.done && !snapshot.hasData) {
          return const Center(child: CircularProgressIndicator());
        }
        if (snapshot.hasError) return Center(child: Text(snapshot.error.toString()));

        if (snapshot.data != null) {
          return ListView.builder(
            itemCount: snapshot.data?.length ?? 0,
            itemBuilder: (BuildContext context, index) {
              return Card(
                elevation: 7,
                color: Colors.orange[600],
                margin: const EdgeInsets.all(10),
                child: ListTile(
                  leading: CircleAvatar(
                    backgroundColor: Colors.orange[300],
                    child: Text(snapshot.data?[index].idPays.toString() ?? ""),
                  ),
                  title: Text(snapshot.data?[index].nomPays ?? ""),
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