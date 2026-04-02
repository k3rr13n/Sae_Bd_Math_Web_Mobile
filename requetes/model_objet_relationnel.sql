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


INSERT INTO VOL (nom_compagnie, numero_vol, date_heure_depart, equipage, indicesQualite)
VALUES (
    'Air France', 
    442, 
    TO_TIMESTAMP('2024-06-11 13:00', 'YYYY-MM-DD HH24:MI'),
    equipageTabT(
        equipageT('Goscinny', 'Pilote'),
        equipageT('Uderzo', 'Commissaire')
    ),
    indiceQualiteTabT(
        indiceQualiteT('carbone', 3, 4),
        indiceQualiteT('securite', 4, 5)
    )
);

COMMIT;