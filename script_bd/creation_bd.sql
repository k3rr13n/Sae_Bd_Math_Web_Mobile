CREATE TABLE VOL(
 comp_aerienne VARCHAR(20),
 numero INT(10),
 horaire_depart DATETIME,
 ville_depart INT,
 pays_depart INT,
 aeroport_depart INT,
 terminal_depart INT,
 ville_arrivee INT,
 pays_arrivee INT,
 aeroport_arrivee INT,
 terminal_arrivee INT,
 horaire_arrivee DATETIME,
 PRIMARY KEY (comp_aerienne, numero, horaire_depart)
);


CREATE TABLE PAYS(
 id_pays INT,
 nom_pays VARCHAR(5),
 PRIMARY KEY (id_pays)
);


CREATE TABLE VILLE(
 id_ville INT,
 id_pays INT,
 nom_ville VARCHAR(50),
 PRIMARY KEY (id_ville)
);


CREATE TABLE AEROPORT(
 id_aeroport INT,
 id_ville INT,
 nom_aeroport VARCHAR(50),
 PRIMARY KEY (id_aeroport)
);


CREATE TABLE TERMINAL(
 id_terminal INT,
 id_aeroport INT,
 nom_terminal VARCHAR(15),
 PRIMARY KEY (id_terminal)
);


-- CREATE TABLE HORAIRE(
--  id_horaire INT,
--  horaire DATE
-- );

#

ALTER TABLE VOL ADD CONSTRAINT UNIQUE(aeroport_depart);
ALTER TABLE VOL ADD CONSTRAINT UNIQUE(aeroport_arrivee);

ALTER TABLE VOL ADD FOREIGN KEY (ville_depart) REFERENCES VILLE (id_ville);
ALTER TABLE VOL ADD FOREIGN KEY (ville_arrivee) REFERENCES VILLE (id_ville);
ALTER TABLE VOL ADD FOREIGN KEY (pays_depart) REFERENCES PAYS (id_pays);
ALTER TABLE VOL ADD FOREIGN KEY (pays_arrivee) REFERENCES PAYS (id_pays);
ALTER TABLE VOL ADD FOREIGN KEY (aeroport_depart) REFERENCES AEROPORT (id_aeroport);
ALTER TABLE VOL ADD FOREIGN KEY (aeroport_arrivee) REFERENCES AEROPORT (id_aeroport);
ALTER TABLE VOL ADD FOREIGN KEY (terminal_depart) REFERENCES TERMINAL (id_terminal);
ALTER TABLE VOL ADD FOREIGN KEY (terminal_arrivee) REFERENCES TERMINAL (id_terminal);
-- ALTER TABLE VOL ADD FOREIGN KEY (horaire_depart) REFERENCES HORAIRE (id_horaire);
-- ALTER TABLE VOL ADD FOREIGN KEY (horaire_arrivee) REFERENCES HORAIRE (id_horaire);

ALTER TABLE VILLE ADD FOREIGN KEY (id_pays) REFERENCES PAYS (id_pays);
ALTER TABLE AEROPORT ADD FOREIGN KEY (id_ville) REFERENCES VILLE (id_ville);
ALTER TABLE TERMINAL ADD FOREIGN KEY (id_aeroport) REFERENCES AEROPORT (id_aeroport);




-- VOL: comp_aerienne, _numero, _horaire_depart, ville_depart, pays_depart, aeroport_depart, terminal_depart, ville_arrivee, pays_arrivee, aeroport_arrivee, terminal_arrivee, horaire_arrivee
-- PAYS: id_pays, nom_pays
-- VILLE: id_ville, _id_pays, nom_ville
-- AEROPORT: id_aeroport, _id_ville, nom_aeroport
-- TERMINAL: id_terminal, _id_aeroport, nom_terminal
-- HORAIRE: id_horaire, horaire

-- DF, 11 VOL, 0N HORAIRE
-- DF, 11 VOL, 0N PAYS
-- DF, 11 VOL, 0N VILLE
-- DF, 11 VOL, 0N AEROPORT
-- DF, 11 VOL, 0N TERMINAL

-- DF, ON PAYS, 11 VILLE
-- DF, ON VILLE, 11 AEROPORT
-- DF, ON AEROPORT, 11 TERMINAL

