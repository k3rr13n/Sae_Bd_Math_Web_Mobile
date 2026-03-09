-- 2a --
/*donner les villes que nous pouvons atteindre
 par vols directs qui partent de Paris.--*/

Select * from VILLE
NATURAL JOIN TERMINAL
NATURAL JOIN AEROPORT
NATURAL JOIN VILLE
WHERE nom_ville == "Paris";