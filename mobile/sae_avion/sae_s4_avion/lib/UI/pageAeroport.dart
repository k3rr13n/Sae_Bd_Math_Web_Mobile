import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'details_aeroport.dart';
import '../api/MyAPI.dart';

class pageAeroport extends StatelessWidget{
  final MyAPI myAPI = MyAPI();
  pageAeroport();


  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: myAPI.getAeroports(),
      builder: (context, snapshot) {
        if(snapshot.connectionState != ConnectionState.done && !snapshot.hasData) {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }

        if(snapshot.hasError){
          return Center(child: Text(snapshot.error.toString()));
        }

        if(snapshot.data != null) {
          return ListView.builder(
            itemCount:snapshot.data?.length??0,
            itemBuilder:(BuildContext context, index){
              var aeroport = snapshot.data![index];
              return Card(
                elevation: 7,
                color: Colors.red[600],
                margin: const EdgeInsets.all(10),
                child: ListTile(
                  leading: CircleAvatar(backgroundColor: Colors.red[300],
                    child: Text(aeroport.idVille.toString()??""),),
                  title: Text(aeroport.nomAeroport??""),
                  trailing: IconButton(
                      icon: const Icon(Icons.info),
                      onPressed: () {
                        Navigator.push(context, MaterialPageRoute(builder: (context) => DetailScreenAeroport(aeroport: aeroport)));
                      }),
                ),
              );
            } ,
          );
        }


        return Center(
            child: Column(
                mainAxisAlignment: MainAxisAlignment.center)
        );

      },
    );
  }
}
