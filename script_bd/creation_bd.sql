CREATE TABLE COMPAGNIE(
    nom_compagnie VARCHAR(50),
    PRIMARY KEY (nom_compagnie)
);

CREATE TABLE VOL(
    nom_compagnie VARCHAR(50)
        REFERENCES COMPAGNIE(nom_compagnie)
        ON DELETE CASCADE,
    numero_vol INT(10),
    date_heure_depart DATETIME,
    date_heure_arrivee_prevue DATETIME,
    terminal_depart VARCHAR(15), -- cle etrangere
    terminal_arrivee VARCHAR(15), -- cle etrangere
    aeroport_depart VARCHAR(50), -- cle etrangere
    aeroport_arrivee VARCHAR(50), -- cle etrangere
    PRIMARY KEY (nom_compagnie, numero_vol, date_heure_depart)
);

CREATE TABLE AEROPORT(
    nom_aeroport VARCHAR(50),
    id_ville INT, -- cle etrangere
    PRIMARY KEY (nom_aeroport)
);

CREATE TABLE TERMINAL(
    nom_aeroport VARCHAR(50)
        REFERENCES AEROPORT(nom_aeroport)
        ON DELETE CASCADE,
    nom_terminal VARCHAR(15),
    PRIMARY KEY (nom_aeroport, nom_terminal)
);

CREATE TABLE VILLE(
    id_ville INT,
    id_pays INT, -- cle etrangere
    nom_ville VARCHAR(50),
    PRIMARY KEY (id_ville)
);

CREATE TABLE PAYS(
    id_pays INT,
    nom_pays VARCHAR(5),
    PRIMARY KEY (id_pays)
);


ALTER TABLE VILLE ADD FOREIGN KEY (id_pays) REFERENCES PAYS (id_pays);
ALTER TABLE AEROPORT ADD FOREIGN KEY (id_ville) REFERENCES VILLE (id_ville);

ALTER TABLE VOL ADD FOREIGN KEY (aeroport_depart, terminal_depart) REFERENCES TERMINAL (nom_aeroport, nom_terminal);
ALTER TABLE VOL ADD FOREIGN KEY (aeroport_arrivee, terminal_arrivee) REFERENCES TERMINAL (nom_aeroport, nom_terminal);

------------------------------------------------------------------------------------------
