-- Tout les vols qui partent de paris 
/*select nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee
from VOL natural join AEROPORT as a natural join VILLE
where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris';*/



-- 2.1
/* Donner les villes que nous pouvons atteindre par vols directs qui partent de Paris. */

select distinct nom_ville
from VOL natural join AEROPORT as a natural join VILLE
where aeroport_arrivee = a.nom_aeroport and (nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee) in(
    select nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee
    from VOL natural join AEROPORT as a natural join VILLE
    where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris'
);



-- 2.2
/*En considérant les horaires des vols, veuillez fournir la liste des villes accessibles depuis Paris avec un 
vol comprenant UNE correspondance. L’objectif est de permettre aux passagers de réaliser leur correspondance.*/


-- nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee
-- a.id_ville = v.id_ville and
-- distinct nom_ville as ville_depart

