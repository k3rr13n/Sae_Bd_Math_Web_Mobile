import 'aeroport.dart';

class Ville {
  final int idVille;
  final int idPays;
  final String nomVille;
  final List<Aeroport> aeroports; // Changé de vols à aeroports

  Ville({
    required this.idVille,
    required this.idPays,
    required this.nomVille,
    this.aeroports = const [], // Liste vide par défaut
  });

  factory Ville.fromJson(Map<String, dynamic> json) {
    var list = json['aeroports'] as List? ?? [];
    List<Aeroport> aeroList = list.map<Aeroport>((i) => Aeroport.fromJson(i)).toList();

    return Ville(
      idVille: json['id_ville'],
      idPays: json['id_pays'],
      nomVille: json['nom_ville'] ?? '',
      aeroports: aeroList,
    );
  }
}