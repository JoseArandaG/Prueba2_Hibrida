import { Injectable } from '@angular/core';
import { Cita } from '../Modelo/Citas';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;

  private DB_NAME: string = 'Citas';
  private DB_ENCRIPTADA: boolean = false;
  private DB_MODE: string = 'no-encryption';
  private DB_VERSION: number = 1;
  private DB_READ_ONLY: boolean = false;
  private DB_SQL_TABLAS: string = `
    CREATE TABLE IF NOT EXISTS citas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      frase TEXT NOT NULL,
      autor TEXT NOT NULL
    );
  `;

  constructor() { }

  async iniciarPlugin() {
    const plataforma = Capacitor.getPlatform();
    if (plataforma === 'web') {
      await customElements.whenDefined('jeep-sqlite');
      const jeepSqliteEl = document.querySelector('jeep-sqlite');
      if (jeepSqliteEl != null) {
        await this.sqlite.initWebStore();
      }
    }
    await this.abrirConexion();
    await this.db.execute(this.DB_SQL_TABLAS)

    await this.agregarCita({frase: "AAAAAAA", autor:"El Gritador"})
  }

  private async abrirConexion() {
    const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result;
    if (isConn) {
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY);
    } else {
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      );
      await this.db.open();
    }
  }

  private async crearTablas() {
    await this.db.execute(this.DB_SQL_TABLAS);
  }

  async obtenerCitas(): Promise<Cita[]> {
    const result = await this.db.query('SELECT * FROM citas');
    return result.values as Cita[];
  }

  async obtenerRandomCita(): Promise<Cita> {
    const citas = await this.obtenerCitas();
    if (citas.length === 0) {
      throw new Error('No hay citas disponibles.');
    }
    const indice = Math.floor(Math.random() * citas.length);
    return citas[indice];
  }

  async agregarCita(cita: Cita) {
    await this.db.run(`INSERT INTO citas (frase, autor) VALUES (?, ?)`, [cita.frase, cita.autor]);
  }

  async eliminarCita(id: number) { // Cambia el tipo de argumento a number
    await this.db.run(`DELETE FROM citas WHERE id = ?`, [id]);
  }
}
