import 'package:flutter/material.dart';
import '../api/MyAPI.dart';

class pageVille extends StatelessWidget {
  final MyAPI myAPI = MyAPI();
  pageVille({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: myAPI.getVilles(), 
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
                color: Colors.blue[600], 
                margin: const EdgeInsets.all(10),
                child: ListTile(
                  leading: CircleAvatar(
                    backgroundColor: Colors.blue[300],
                    child: Text(snapshot.data?[index].idPays.toString() ?? ""),
                  ),
                  title: Text(snapshot.data?[index].nomVille ?? ""),
                  trailing: IconButton(icon: const Icon(Icons.info), onPressed: () {}),
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