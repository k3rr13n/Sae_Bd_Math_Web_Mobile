-- Oracle
-- 2.1 Yes
/* Donner les villes que nous pouvons atteindre par vols directs qui partent de Paris. */

with cores_0(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
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
from VOL natural join AEROPORT a natural join VILLE
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
from VOL recV 
join AEROPORT a on recV.aeroport_depart = a.nom_aeroport
join VILLE vi on a.id_ville = vi.id_ville
join cores_0 on recV.aeroport_depart = cores_0.aeroport_arrivee 
             and recV.nom_compagnie = cores_0.nom_compagnie
             and recV.date_heure_depart > cores_0.date_heure_arrivee_prevue
where cores_0.nb_corespondences < 0
)

select distinct nom_ville
from cores_0 natural join AEROPORT a natural join VILLE
where cores_0.aeroport_arrivee = a.nom_aeroport;

-- 2.2
/*En considérant les horaires des vols, veuillez fournir la liste des villes accessibles depuis Paris avec un 
vol comprenant UNE correspondance. L’objectif est de permettre aux passagers de réaliser leur correspondance.*/

with cores_1(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
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
from VOL natural join AEROPORT a natural join VILLE
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
from VOL recV 
join AEROPORT a on recV.aeroport_depart = a.nom_aeroport
join VILLE vi on a.id_ville = vi.id_ville
join cores_0 on recV.aeroport_depart = cores_0.aeroport_arrivee 
             and recV.nom_compagnie = cores_0.nom_compagnie
             and recV.date_heure_depart > cores_0.date_heure_arrivee_prevue
where cores_0.nb_corespondences < 1
)

select distinct nom_ville
from cores_0 natural join AEROPORT a natural join VILLE
where cores_0.aeroport_arrivee = a.nom_aeroport;

-- 2.3
/*En considérant les horaires des vols, veuillez fournir la liste des villes accessibles depuis Paris avec un 
vol comprenant DEUX correspondances.*/

with cores_2(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
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
from VOL natural join AEROPORT a natural join VILLE
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
from VOL recV 
join AEROPORT a on recV.aeroport_depart = a.nom_aeroport
join VILLE vi on a.id_ville = vi.id_ville
join cores_0 on recV.aeroport_depart = cores_0.aeroport_arrivee 
             and recV.nom_compagnie = cores_0.nom_compagnie
             and recV.date_heure_depart > cores_0.date_heure_arrivee_prevue
where cores_0.nb_corespondences < 2
)

select distinct nom_ville
from cores_0 natural join AEROPORT a natural join VILLE
where cores_0.aeroport_arrivee = a.nom_aeroport;

-- 2.4
/*Veuillez fournir la liste des villes accessibles depuis Paris, en tenant compte des horaires de vol, 
avec des vols directs ou un nombre quelconque de correspondances.*/

with cores_more(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee, nb_corespondences) as (
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
from VOL natural join AEROPORT a natural join VILLE
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
from VOL recV 
join AEROPORT a on recV.aeroport_depart = a.nom_aeroport
join VILLE vi on a.id_ville = vi.id_ville
join cores_0 on recV.aeroport_depart = cores_0.aeroport_arrivee 
             and recV.nom_compagnie = cores_0.nom_compagnie
             and recV.date_heure_depart > cores_0.date_heure_arrivee_prevue
where cores_0.nb_corespondences < 100
)

select distinct nom_ville
from cores_0 natural join AEROPORT a natural join VILLE
where cores_0.aeroport_arrivee = a.nom_aeroport;