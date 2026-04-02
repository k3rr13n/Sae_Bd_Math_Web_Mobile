// Création des Villes 
CREATE (paris:Ville {nom: "Paris", pays: "FR"}),
       (rio:Ville {nom: "Rio", pays: "BR"}),
       (londres:Ville {nom: "Londres", pays: "UK"}),
       (madrid:Ville {nom: "Madrid", pays: "ES"}),
       
// Création des Vols associés aux villes
       (paris)-[:VOL {
           numero: "AF442", 
           compagnie: "Air France", 
           dateHeureDep: "2026-04-10T23:30", 
           aeroportDep: "Charles de Gaulle"
       }]->(rio),
       
       (paris)-[:VOL {
           numero: "EZY123", 
           compagnie: "EasyJet", 
           dateHeureDep: "2026-04-12T08:00", 
           aeroportDep: "Orly"
       }]->(londres),
       
       (londres)-[:VOL {
           numero: "BA456", 
           compagnie: "British Airways", 
           dateHeureDep: "2026-04-12T14:00"
       }]->(madrid),
       
       (madrid)-[:VOL {
           numero: "IB789", 
           compagnie: "Iberia", 
           dateHeureDep: "2026-04-15T10:00"
       }]->(paris);

//Nous pouvons vérifier notre graphe avec la commande:

MATCH (n) RETURN n;


// REQUÊTE

MATCH p = (villeDep:Ville)-[:VOL*]->(villeArr:Ville)
WHERE villeDep <> villeArr
RETURN DISTINCT 
    villeDep.nom AS Depart, 
    villeArr.nom AS Arrivee, 
    length(p) AS Distance
ORDER BY Depart ASC, Distance ASC

