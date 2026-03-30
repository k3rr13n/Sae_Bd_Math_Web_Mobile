-- Tout les vols qui partent de paris 
/*select nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee
from VOL natural join AEROPORT as a natural join VILLE
where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris';*/



-- 2.1
/* Donner les villes que nous pouvons atteindre par vols directs qui partent de Paris. */

-- select distinct nom_ville
-- from VOL natural join AEROPORT as a natural join VILLE
-- where aeroport_arrivee = a.nom_aeroport and (nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee) in(
--     select nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee
--     from VOL natural join AEROPORT as a natural join VILLE
--     where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris'
-- );

with recursive cores_0(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
select 
nom_compagnie, 
numero_vol, 
date_heure_depart, 
date_heure_arrivee_prevue, 
terminal_depart, 
terminal_arrivee, 
aeroport_depart, 
aeroport_arrivee, 
0 nb_corespondences
from VOL natural join AEROPORT as a natural join VILLE
where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris'

UNION ALL

select 
recV.nom_compagnie, 
recV.numero_vol, 
recV.date_heure_depart, 
recV.date_heure_arrivee_prevue, 
recV.terminal_depart, 
recV.terminal_arrivee, 
recV.aeroport_depart, 
recV.aeroport_arrivee, 
cores_0.nb_corespondences+1 nb_corespondences
from VOL as recV join AEROPORT as a join VILLE join cores_0
where cores_0.nb_corespondences < 0 and recV.aeroport_depart = a.nom_aeroport and 
    recV.aeroport_depart = cores_0.aeroport_arrivee and recV.nom_compagnie = cores_0.nom_compagnie and
    recV.date_heure_depart > cores_0.date_heure_arrivee_prevue
)

select distinct nom_ville
from cores_0 natural join AEROPORT as a natural join VILLE
where cores_0.aeroport_arrivee = a.nom_aeroport;

-- 2.2
/*En considérant les horaires des vols, veuillez fournir la liste des villes accessibles depuis Paris avec un 
vol comprenant UNE correspondance. L’objectif est de permettre aux passagers de réaliser leur correspondance.*/

with recursive cores_1(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
select 
nom_compagnie, 
numero_vol, 
date_heure_depart, 
date_heure_arrivee_prevue, 
terminal_depart, 
terminal_arrivee, 
aeroport_depart, 
aeroport_arrivee, 
0 nb_corespondences
from VOL natural join AEROPORT as a natural join VILLE
where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris'

UNION ALL

select 
recV.nom_compagnie, 
recV.numero_vol, 
recV.date_heure_depart, 
recV.date_heure_arrivee_prevue, 
recV.terminal_depart, 
recV.terminal_arrivee, 
recV.aeroport_depart, 
recV.aeroport_arrivee, 
cores_1.nb_corespondences+1 nb_corespondences
from VOL as recV 
join AEROPORT as a 
join VILLE 
join cores_1
where cores_1.nb_corespondences < 1 and recV.aeroport_depart = a.nom_aeroport and 
    recV.aeroport_depart = cores_1.aeroport_arrivee and recV.nom_compagnie = cores_1.nom_compagnie and
    recV.date_heure_depart > cores_1.date_heure_arrivee_prevue
)

select distinct nom_ville
from cores_1 natural join AEROPORT as a natural join VILLE
where cores_1.aeroport_arrivee = a.nom_aeroport;

-- 2.3
/*En considérant les horaires des vols, veuillez fournir la liste des villes accessibles depuis Paris avec un 
vol comprenant DEUX correspondances.*/

with recursive cores_2(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
select 
nom_compagnie, 
numero_vol, 
date_heure_depart, 
date_heure_arrivee_prevue, 
terminal_depart, 
terminal_arrivee, 
aeroport_depart, 
aeroport_arrivee, 
0 nb_corespondences
from VOL natural join AEROPORT as a natural join VILLE
where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris'

UNION ALL

select 
recV.nom_compagnie, 
recV.numero_vol, 
recV.date_heure_depart, 
recV.date_heure_arrivee_prevue, 
recV.terminal_depart, 
recV.terminal_arrivee, 
recV.aeroport_depart, 
recV.aeroport_arrivee, 
cores_2.nb_corespondences+1 nb_corespondences
from VOL as recV join AEROPORT as a join VILLE join cores_2
where cores_2.nb_corespondences < 2 and recV.aeroport_depart = a.nom_aeroport and 
    recV.aeroport_depart = cores_2.aeroport_arrivee and recV.nom_compagnie = cores_2.nom_compagnie and
    recV.date_heure_depart > cores_2.date_heure_arrivee_prevue
)

select distinct nom_ville
from cores_2 natural join AEROPORT as a natural join VILLE
where cores_2.aeroport_arrivee = a.nom_aeroport;

-- 2.4
/*Veuillez fournir la liste des villes accessibles depuis Paris, en tenant compte des horaires de vol, 
avec des vols directs ou un nombre quelconque de correspondances.*/

with recursive cores_more(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
select 
nom_compagnie, 
numero_vol, 
date_heure_depart, 
date_heure_arrivee_prevue, 
terminal_depart, 
terminal_arrivee, 
aeroport_depart, 
aeroport_arrivee, 
0 nb_corespondences
from VOL natural join AEROPORT as a natural join VILLE
where aeroport_depart = a.nom_aeroport and nom_ville = 'Paris'

UNION ALL

select 
recV.nom_compagnie, 
recV.numero_vol, 
recV.date_heure_depart, 
recV.date_heure_arrivee_prevue, 
recV.terminal_depart, 
recV.terminal_arrivee, 
recV.aeroport_depart, 
recV.aeroport_arrivee, 
cores_more.nb_corespondences+1 nb_corespondences
from VOL as recV join AEROPORT as a join VILLE join cores_more
where cores_more.nb_corespondences < 100 and recV.aeroport_depart = a.nom_aeroport and 
    recV.aeroport_depart = cores_more.aeroport_arrivee and recV.nom_compagnie = cores_more.nom_compagnie and
    recV.date_heure_depart > cores_more.date_heure_arrivee_prevue
)

select distinct nom_ville
from cores_more natural join AEROPORT as a natural join VILLE
where cores_more.aeroport_arrivee = a.nom_aeroport;