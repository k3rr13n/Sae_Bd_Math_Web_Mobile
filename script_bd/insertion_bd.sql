INSERT INTO PAYS VALUES (1, 'FR');
INSERT INTO PAYS VALUES (2, 'UK');
INSERT INTO PAYS VALUES (3, 'BR');

INSERT INTO VILLE VALUES (1, 1, 'Paris');
INSERT INTO VILLE VALUES (2, 2, 'Londre');
INSERT INTO VILLE VALUES (3, 3, 'Rio');

INSERT INTO AEROPORT VALUES (1, 1, 'Charle de gaulle');
INSERT INTO AEROPORT VALUES (2, 2, 'Green tea');
INSERT INTO AEROPORT VALUES (3, 3, 'Gran Rio');

INSERT INTO TERMINAL VALUES (1, 1, '3E');
INSERT INTO TERMINAL VALUES (2, 2, '2A');
INSERT INTO TERMINAL VALUES (3, 3, '2');

INSERT INTO VOL VALUES (
    'Air frnce',
    '456',
    '2025-01-02 12:54:23',
    1, --ville depart--
    1, --paus d--

    1, --aeroport d
    1, -- terminal d 
    2,-- ville -arr--
    2, --pays, arr--
    2, --aeroport_arrivee--
    2, --termainal arr
    '2025-01-02 14:01:11'  --horaire a--
);


