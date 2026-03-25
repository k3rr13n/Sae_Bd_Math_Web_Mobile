from flask_restx import fields
from .extensions import api


compagnie_model = api.model('Compagnie', {
    "nom_compagnie": fields.String
})

compagnie_input_model = api.model('CompagnieInput', {
    "nom_compagnie":fields.String
})

aeroport_model = api.model("Aeroport", {
    "nom_aeroport": fields.String,
    "ville_id": fields.Integer 
})

aeroport_input_model = api.model("AeroportInput",  {
    "nom_aeroport": fields.String,
    "ville_id": fields.Integer
})

vol_model = api.model("Vol", {
    "nom_compagnie" : fields.String,
    "numero_vol" : fields.Integer,
    "date_heure_depart" : fields.DateTime,
    "date_heure_arrive_prevue" : fields.DateTime,
    "nom_aeroport_1" : fields.String,
    "nom_aeroport_2" : fields.String,
    "nom_terminal_1" : fields.String,
    "nom_terminal_2" : fields.String
    }
)


vol_input_model = api.model("VolInput", {
    "nom_compagnie" : fields.String, #fk
    "numero_vol" : fields.Integer,
    "date_heure_depart" : fields.DateTime, #format ISO8601 (ex: 2023-10-27T10:00:00).
    "date_heure_arrive_prevue" : fields.DateTime,
    "nom_aeroport_1" : fields.String, #fk  nom_aeroport_1= aeroport_depart
    "nom_aeroport_2" : fields.String, #fk
    "nom_terminal_1" : fields.String, #fk
    "nom_terminal_2" : fields.String #fk
    }
)

terminal_model = api.model("Terminal", {
    "nom_terminal": fields.String,
    "nom_aeroport": fields.String

})

terminal_input_model = api.model("TerminalInput", {
    "nom_terminal": fields.String,
    "nom_aeroport": fields.String #fk
})

ville_model = api.model("Ville", {
    "id_ville": fields.Integer,
    "nom_ville": fields.String,
    "id_pays": fields.Integer

})

ville_input_model = api.model("VilleInput", {
    "id_ville": fields.Integer,
    "nom_ville": fields.String,
    "id_pays": fields.Integer #fk
    
})

pays_model = api.model("Pays", {
    "id_pays": fields.Integer,
    "nom_pays": fields.String
})

pays_input_model = api.model("PaysInput", {
    "nom_pays": fields.String
})