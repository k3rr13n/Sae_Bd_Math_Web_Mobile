DROP TABLE VOL;
DROP TYPE equipageTabT;
DROP TYPE equipageT;
DROP TYPE indiceQualiteTabT;
DROP TYPE indiceQualiteT;

------------------------------------------------------------------------------------------

CREATE OR REPLACE TYPE equipageT AS OBJECT (
    nom VARCHAR2(50), 
    fonction VARCHAR2(50),
    MEMBER FUNCTION get_nameSize RETURN NUMBER
);
/

CREATE OR REPLACE TYPE BODY equipageT AS
    MEMBER FUNCTION get_nameSize RETURN NUMBER IS
    BEGIN
        RETURN LENGTH(self.nom);
    END;
END;
/
CREATE OR REPLACE TYPE equipageTabT AS TABLE OF equipageT;
/

------------------------------------------------------------------------------------------


CREATE OR REPLACE TYPE indiceQualiteT AS OBJECT (
    libelle VARCHAR2(50),
    valeur NUMBER,
    poids NUMBER
);
/

CREATE OR REPLACE TYPE indiceQualiteTabT AS TABLE OF indiceQualiteT;
/

------------------------------------------------------------------------------------------


CREATE TABLE VOL (
    nom_compagnie VARCHAR2(50),
    numero_vol NUMBER(10),
    date_heure_depart TIMESTAMP,
    date_heure_arrivee_prevue TIMESTAMP,
    terminal_depart VARCHAR2(15),
    terminal_arrivee VARCHAR2(15),
    aeroport_depart VARCHAR2(50),
    aeroport_arrivee VARCHAR2(50),
    nom_ville VARCHAR2(50),
    nom_pays VARCHAR2(5),
    equipage equipageTabT,
    indicesQualite indiceQualiteTabT,
    CONSTRAINT pk_vol PRIMARY KEY (nom_compagnie, numero_vol, date_heure_depart)
)
NESTED TABLE equipage STORE AS equipage_nt,
NESTED TABLE indicesQualite STORE AS indices_nt;
/



------------------------------------------------------------------------------------------
--------------------------------------- INSERTIONS ---------------------------------------
------------------------------------------------------------------------------------------
DELETE FROM VOL;

-- Vol 1 : Air France (Paris -> Rio)
INSERT INTO VOL (
    nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue,
    terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee,
    nom_ville, nom_pays, equipage, indicesQualite
) VALUES (
    'Air France', 442, 
    TO_TIMESTAMP('2024-06-11 13:00', 'YYYY-MM-DD HH24:MI'),
    TO_TIMESTAMP('2024-06-11 23:30', 'YYYY-MM-DD HH24:MI'),
    'Terminal 2E', 'Terminal 1', 'CDG', 'GIG',
    'Paris', 'FR',
    equipageTabT(
        equipageT('Goscinny', 'Pilote'),
        equipageT('Zoro', 'Pilote'),
        equipageT('Uderzo', 'Commissaire')
    ),
    indiceQualiteTabT(
        indiceQualiteT('carbone', 3, 4),
        indiceQualiteT('securite', 4, 5),
        indiceQualiteT('prix', 4, 3)
    )
);

-- Vol 2 : Lufthansa (Francfort -> Londres)
INSERT INTO VOL (
    nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue,
    terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee,
    nom_ville, nom_pays, equipage, indicesQualite
) VALUES (
    'Lufthansa', 123, 
    TO_TIMESTAMP('2024-06-12 10:00', 'YYYY-MM-DD HH24:MI'),
    TO_TIMESTAMP('2024-06-12 11:30', 'YYYY-MM-DD HH24:MI'),
    'Terminal 1', 'Terminal 2', 'FRA', 'LHR',
    'Francfort', 'DE',
    equipageTabT(
        equipageT('Herge', 'Pilote'),
        equipageT('Franquin', 'Pilote'),
        equipageT('Haddock', 'Commissaire'),
        equipageT('Asma', 'Hotesse'),
        equipageT('Pernelle', 'Hotesse')
    ),
    indiceQualiteTabT(
        indiceQualiteT('carbone', 2, 4),
        indiceQualiteT('securite', 5, 5),
        indiceQualiteT('prix', 3, 3)
    )
);

-- Vol 3 : British Airways (Londres -> New York)
INSERT INTO VOL (
    nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue,
    terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee,
    nom_ville, nom_pays, equipage, indicesQualite
) VALUES (
    'British Airways', 789, 
    TO_TIMESTAMP('2024-06-13 08:30', 'YYYY-MM-DD HH24:MI'),
    TO_TIMESTAMP('2024-06-13 16:45', 'YYYY-MM-DD HH24:MI'),
    'Terminal 5', 'Terminal 7', 'LHR', 'JFK',
    'Londres', 'UK',
    equipageTabT(
        equipageT('Goscinny', 'Pilote'),
        equipageT('Zoro', 'Pilote'),
        equipageT('Tournesol', 'Mecanicien'),
        equipageT('Bastian', 'Hotesse'),
        equipageT('Nolhan', 'Hotesse'),
        equipageT('Pernelle', 'Steward')
    ),
    indiceQualiteTabT(
        indiceQualiteT('carbone', 5, 4),
        indiceQualiteT('securite', 3, 5),
        indiceQualiteT('prix', 5, 3)
    )
);

-- Vol 4 : Iberia (Madrid -> Barcelone)
INSERT INTO VOL (
    nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue,
    terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee,
    nom_ville, nom_pays, equipage, indicesQualite
) VALUES (
    'Iberia', 555, 
    TO_TIMESTAMP('2024-06-14 15:00', 'YYYY-MM-DD HH24:MI'),
    TO_TIMESTAMP('2024-06-14 16:15', 'YYYY-MM-DD HH24:MI'),
    'T4', 'T1', 'MAD', 'BCN',
    'Madrid', 'ES',
    equipageTabT(
        equipageT('Uderzo', 'Pilote'),
        equipageT('Zoro', 'Pilote')
    ),
    indiceQualiteTabT(
        indiceQualiteT('carbone', 1, 4),
        indiceQualiteT('securite', 4, 5),
        indiceQualiteT('prix', 2, 3)
    )
);

COMMIT;


------------------------------------------------------------------------------------------
--------------------------------------- REQUETES ---------------------------------------
------------------------------------------------------------------------------------------

-- Pour chaque vol, donner le nombre de personnes de l'équipage, par fonction.--
SELECT vol.nom_compagnie, vol.numero_vol, equip.fonction, COUNT(*) AS nb_personnes
FROM VOL vol, TABLE(vol.equipage) equip
GROUP BY vol.nom_compagnie, vol.numero_vol, equip.fonction
ORDER BY vol.nom_compagnie, vol.numero_vol;


-- Pour chaque pilote, indiquer combien de vols lui sont associés. --
SELECT equip.nom, COUNT(*) as nb_vols
FROM VOL vol, TABLE(vol.equipage) equip
WHERE equip.fonction = 'Pilote'
GROUP BY equip.nom;


-- Pour chaque vol, indiquer l’impact de chaque indice de qualité 
-- (l’impact d’un indice de qualité est donné par le produit de sa 
-- valeur et du poids qui lui est attribué).

SELECT vol.numero_vol, ind.libelle, (ind.valeur * ind.poids) as impact
FROM VOL vol, TABLE(vol.indicesQualite) ind;


-- Pour chaque indice de qualité, calculer son impact moyen.

