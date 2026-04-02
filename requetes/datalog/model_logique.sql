-- Datalog
-- Table Oracle

CREATE TABLE VOL(
    nom_compagnie VARCHAR2(50),
    numero_vol NUMBER(10),
    date_heure_depart NUMBER,
    date_heure_arrivee_prevue NUMBER,
    terminal_depart VARCHAR2(15),
    terminal_arrivee VARCHAR2(15),
    aeroport_depart VARCHAR2(50),
    aeroport_arrivee VARCHAR2(50), 
    pays_depart VARCHAR2(2),
    pays_arrivee VARCHAR2(2),
    ville_depart VARCHAR2(50),
    ville_arrivee VARCHAR2(50),
    PRIMARY KEY (nom_compagnie, numero_vol, date_heure_depart)
);

-- Requetes datalog
-- Exemple

/* 

Program : (les fait et les regles)

% Faits
vol(air_france, paris, londres).
vol(air_france, londres, tokyo).
vol(lufthansa, tokyo, berlin).

% Règle récursive
accessible(X, Y) :- vol(_, X, Y).
accessible(X, Y) :- vol(_, X, Z), accessible(Z, Y).

Query : (les requetes)

accessible(paris, Y)?

*/


% Faits
vol(air_france, 10000, 1, 6, a, b, charles_de_gaulle, heathrow, fr, en, paris, londres).
%vol(air_france, londres, tokyo).
%vol(lufthansa, tokyo, berlin).

% Règle récursive
ville_dep(X, Y, Z, U) :- vol(X,Y,Z,_,_,_,_,_,_,_,U,_).
%accessible(X, Y) :- vol(_, X, Z), accessible(Z, Y).


ville_dep(air_france, 10000, 1, U)?

-- 3.1 Identifiez quels sont les prédicats extensionnels de votre base de données déductive.

vol(nom_compagnie, no_vol, h_dep, h_arr, terminal_dep, terminal_arr, aeroport_dep, aeroport_arr, pays_dep, pays_arr, ville_dep, ville_arr).

-- 3.2 Toutes les villes connecté entre elle par des vols (avec ou sans connection)

% Toutes les villes connecté entre elle par des vols (avec ou sans connection)
villes_all(X, Y, DEPART, ARRIVE) :- vol(_,_, DEPART, ARRIVE,_,_,_,_,_,_, X, Y).
villes_all(X, Y, DEPART, ARRIVE) :- vol(_,_, DEPART, ETAPE,_,_,_,_,_,_, X, Z), villes_all(Z, Y, ETAPE, ARRIVE).

villes_all(X, Y, DEPART,  ARRIVE)?

-- 3.3 Toutes les villes connecté entre elle par des vols (avec un nombre impaire de connection)

