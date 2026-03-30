import 'package:flutter/material.dart';
import './pageAeroport.dart';
import './pageDestination.dart';
import './pagePays.dart';
import './pageVol.dart';


class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _BottomNavigationBarState();
}

class _BottomNavigationBarState extends State<MyHomePage> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle = TextStyle(
      fontSize: 30, fontWeight: FontWeight.bold);
  final List<Widget> _widgetOptions = <Widget>[
    pageAeroport(),
    pageVille(),
    pagePays(),
    pageVol(),
  ];


  void _incrementIndex(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title, style: Theme
            .of(context)
            .appBarTheme
            .titleTextStyle,),
      ),
      body: Center(
          child: _widgetOptions.elementAt(_selectedIndex)
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        backgroundColor: Theme
            .of(context)
            .bottomNavigationBarTheme
            .backgroundColor,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(icon: Icon(Icons.local_airport), label: 'Aéroports'),
          BottomNavigationBarItem(icon: Icon(Icons.location_city), label: 'Villes'),
          BottomNavigationBarItem(icon: Icon(Icons.public), label: 'Pays'),
          BottomNavigationBarItem(icon: Icon(Icons.flight), label: 'Vols'),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor:Theme
            .of(context)
            .textSelectionTheme
            .selectionColor,
        onTap: _incrementIndex,
      ),
    );
  }
}