import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
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
              return Card(
                elevation: 7,
                color: Colors.red[600],
                margin: const EdgeInsets.all(10),
                child: ListTile(
                  leading: CircleAvatar(backgroundColor: Colors.red[300],
                    child: Text(snapshot.data?[index].idVille.toString()??""),),
                  title: Text(snapshot.data?[index].nomAeroport??""),
                  trailing: IconButton(
                      icon: const Icon(Icons.edit),
                      onPressed: () {
                        //Navigator.push(context, MaterialPageRoute(builder: (context) => Detail(task: snapshot.data?[index])));
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
