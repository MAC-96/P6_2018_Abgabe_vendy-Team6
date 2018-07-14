//initialisiere SQLite Modul
const sqlite3 = require('sqlite3').verbose();

//DB Aufruf
let db = new sqlite3.Database('./db/vendy-database-02.db');

//löscht alte Tabelle = sonst werden die selben Werte immer wieder drangehägt
var deleteTable = `DELETE FROM ESPtoVVVV;`

db.all(deleteTable, [], (err) => {
 if (err) {
    throw err;
 }
});


module.exports = {
        newDB: function(mac, esp, time){                                                            //Spalten MAcAdresse, ESP, und Zeit sollen in neuer TAbelle Angezeigt werden; Distanz wird für vvvv erstmal nicht gebraucht

            //kreiert eine neue Tabelle falls noch nicht vorhanden
            db.run('CREATE TABLE ESPtoVVVV(Adress text, ESP text, Time text)',function(error){       //text steht hier für den Datentyp der Spalte

                  if(error){
                    console.log(error.message);
                  }

            });

            //hier werden mehrere Werte in eine Tabellenzeile geschrieben
            db.run('INSERT INTO ESPtoVVVV(Adress, ESP, Time) VALUES(?,?,?)', [mac, esp, time], function(err) { //Wert... steht hier für die Variable des Wertes

                    if (err) {
                         return console.log(err.message);
                    }

                    console.log(`Es wurde eine neue Zeile mit Werten hinzugefügt, sie hat die Zeile ${this.lastID}`)
            });
       }

};

//NEXT STEP: MacAdresse aus DB löschen? ode in vvvv?
