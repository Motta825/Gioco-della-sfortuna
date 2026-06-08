/**
 * @file Gioco della Sfortuna - collezione carte e componente principale
 * @module gioco
 * @author Michele Motta
 */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import React,{ useState } from "react";

/**
 * @typedef {Object} Carta
 * @property {number} id Identificatore univoco.
 * @property {string} title Descrizione della carta.
 * @property {number} score Punteggio di sfortuna.
 * @property {string} img URL dell'immagine.
 */

/**
 * Collezione delle carte del Gioco della Sfortuna.
 * @type {Carta[]}
 */
export const carte = [
  { id: 1, title: "Ti si rompe la mina della matita durante l'esame scritto", score: 3.5, img: "https://picsum.photos/200/300?random=1" },
  { id: 2, title: "Dimentichi la tessera dello studente a casa", score: 5.0, img: "https://picsum.photos/200/300?random=2" },
  { id: 3, title: "Fai cigolare la sedia in un'aula totalmente silenziosa", score: 6.5, img: "https://picsum.photos/200/300?random=3" },
  { id: 4, title: "Arrivi in ritardo di 5 minuti e devi sederti in prima fila", score: 9.0, img: "https://picsum.photos/200/300?random=4" },
  { id: 5, title: "Dimentichi l'evidenziatore per l'ultimo ripasso", score: 11.5, img: "https://picsum.photos/200/300?random=5" },
  { id: 6, title: "Sbagli aula e segui mezz'ora di una lezione non tua", score: 14.0, img: "https://picsum.photos/200/300?random=6" },
  { id: 7, title: "La penna ti abbandona a metà del compito", score: 16.5, img: "https://picsum.photos/200/300?random=7" },
  { id: 8, title: "Il professore ti fissa male mentre mastichi una gomma", score: 18.0, img: "https://picsum.photos/200/300?random=8" },
  { id: 9, title: "Finisce la carta igienica nei bagni della facoltà", score: 21.5, img: "https://picsum.photos/200/300?random=9" },
  { id: 10, title: "Trovi l'unico posto in aula senza una presa elettrica vicina", score: 24.0, img: "https://picsum.photos/200/300?random=10" },
  { id: 11, title: "Dimentichi la calcolatrice il giorno del compito di fisica", score: 27.5, img: "https://picsum.photos/200/300?random=11" },
  { id: 12, title: "Il professore corregge i tuoi errori davanti a tutti", score: 30.0, img: "https://picsum.photos/200/300?random=12" },
  { id: 13, title: "Versi il caffè sul riassunto che dovevi consegnare", score: 32.5, img: "https://picsum.photos/200/300?random=13" },
  { id: 14, title: "Prendi un penalty sui mezzi per arrivare all'esame", score: 35.0, img: "https://picsum.photos/200/300?random=14" },
  { id: 15, title: "Perdi gli appunti della lezione più importante", score: 37.5, img: "https://picsum.photos/200/300?random=15" },
  { id: 16, title: "Il tuo compagno di progetto sparisce nel nulla", score: 40.0, img: "https://picsum.photos/200/300?random=16" },
  { id: 17, title: "Ti addormenti in biblioteca e ti svegli con la bava sul libro", score: 42.5, img: "https://picsum.photos/200/300?random=17" },
  { id: 18, title: "La sessione estiva dura fino a fine luglio", score: 45.0, img: "https://picsum.photos/200/300?random=18" },
  { id: 19, title: "Il Wi-Fi dell'università si disconnette durante un test online", score: 48.5, img: "https://picsum.photos/200/300?random=19" },
  { id: 20, title: "Ti interrogano sull'unico paragrafo che hai saltato", score: 51.0, img: "https://picsum.photos/200/300?random=20" },
  { id: 21, title: "Cade il silenzio in aula e il tuo stomaco brontola fortissimo", score: 53.5, img: "https://picsum.photos/200/300?random=21" },
  { id: 22, title: "Il PC si spegne per aggiornamento mentre scrivi la tesi", score: 55.0, img: "https://picsum.photos/200/300?random=22" },
  { id: 23, title: "L'esame viene rimandato all'ultimo secondo senza preavviso", score: 57.5, img: "https://picsum.photos/200/300?random=23" },
  { id: 24, title: "Il professore non risponde alle mail per la tesi da un mese", score: 60.0, img: "https://picsum.photos/200/300?random=24" },
  { id: 25, title: "Prendi 17 all'esame più difficile del tuo percorso", score: 62.5, img: "https://picsum.photos/200/300?random=25" },
  { id: 26, title: "Ti salta la luce a casa durante una presentazione su Teams", score: 65.0, img: "https://picsum.photos/200/300?random=26" },
  { id: 27, title: "Trovi una multa sul parabrezza dopo 8 ore di studio", score: 67.5, img: "https://picsum.photos/200/300?random=27" },
  { id: 28, title: "Sbagli il giorno dell'appello e ti presenti una settimana dopo", score: 70.0, img: "https://picsum.photos/200/300?random=28" },
  { id: 29, title: "Invii una mail di lamentele sul prof... al professore stesso", score: 72.5, img: "https://picsum.photos/200/300?random=29" },
  { id: 30, title: "Ti viene un attacco di panico davanti al foglio bianco", score: 75.0, img: "https://picsum.photos/200/300?random=30" },
  { id: 31, title: "Il server crasha durante il 'click day' per l'iscrizione", score: 77.5, img: "https://picsum.photos/200/300?random=31" },
  { id: 32, title: "Bocciato per la terza volta allo stesso scritto", score: 79.0, img: "https://picsum.photos/200/300?random=32" },
  { id: 33, title: "Il professore decide di cambiare programma il mese prima dell'esame", score: 81.5, img: "https://picsum.photos/200/300?random=33" },
  { id: 34, title: "Perdi la chiavetta USB con l'unica copia del tuo project work", score: 83.0, img: "https://picsum.photos/200/300?random=34" },
  { id: 35, title: "Ti si rompe lo smartphone e perdi l'accesso all'app dei token", score: 85.5, img: "https://picsum.photos/200/300?random=35" },
  { id: 36, title: "Ti scappa da andare in bagno durante un esame di 4 ore blindato", score: 87.0, img: "https://picsum.photos/200/300?random=36" },
  { id: 37, title: "Trovano un errore strutturale nella tua tesi già stampata e rilegata", score: 89.5, img: "https://picsum.photos/200/300?random=37" },
  { id: 38, title: "Ti ammali di influenza la notte prima del concorsone", score: 91.0, img: "https://picsum.photos/200/300?random=38" },
  { id: 39, title: "Vieni accusato ingiustamente di aver copiato all'orale", score: 93.5, img: "https://picsum.photos/200/300?random=39" },
  { id: 40, title: "Sbagli a compilare la domanda di laurea e salti la sessione", score: 95.0, img: "https://picsum.photos/200/300?random=40" },
  { id: 41, title: "Bocciato all'ultimo esame prima della laurea, salta la festa", score: 96.5, img: "https://picsum.photos/200/300?random=41" },
  { id: 42, title: "Ti revocano una borsa di studio per un ritardo burocratico", score: 97.0, img: "https://picsum.photos/200/300?random=42" },
  { id: 43, title: "Ti si allaga la stanza dello studentato con dentro i libri", score: 97.5, img: "https://picsum.photos/200/300?random=43" },
  { id: 44, title: "Perdi l'hard disk esterno contenente 3 anni di progetti", score: 98.0, img: "https://picsum.photos/200/300?random=44" },
  { id: 45, title: "Il sistema informatico cancella la tua carriera per errore", score: 98.5, img: "https://picsum.photos/200/300?random=45" },
  { id: 46, title: "Ti addormenti la mattina della tesi e arrivi a proclamazione finita", score: 99.0, img: "https://picsum.photos/200/300?random=46" },
  { id: 47, title: "Vieni espulso dal corso per un malinteso con la commissione", score: 99.5, img: "https://picsum.photos/200/300?random=47" },
  { id: 48, title: "Ti rubano lo zaino in aula studio con dentro il MacBook", score: 99.6, img: "https://picsum.photos/200/300?random=48" },
  { id: 49, title: "Annullano l'intero bando di ammissione dopo che hai vinto", score: 99.8, img: "https://picsum.photos/200/300?random=49" },
  { id: 50, title: "Scopri l'ultimo anno di dover integrare 60 CFU non previsti", score: 100.0, img: "https://picsum.photos/200/300?random=50" }
];

export default function App() {
  /**
   * Mazzo di carte
   * @type {[Carta[] | null, Function]}
   */
  const [mazzo, setMazzo] = useState(null);

  /**
   * Carte del giocatore
   * @type {[Carta[], Function]}
   */
  const [carteGiocatore, setCarteGiocatore] = useState([]);

  /**
   * Carta corrente
   * @type {[Carta | null, Function]}
   */
  const [cartaCorrente, setCartaCorrente] = useState(null);

  /**
   * Stato errore
   * @type {[number, Function]}
   */
  const [errore, setErrore] = useState(0);

  /**
   * Stato del gioco
   * @type {[string, Function]}
   */
  const [statoGioco, setStatoGioco] = useState("inizio");

  /** 
  *Timer del gioco, 30 secondi a disposizione dell'utente
  *@type {[number,Funcion]}
  */
  const [timer,setTimer]= useState(30);
  /**
  *Per la visualizzazione del messaggio di gioco
  *@type {[String,Function]}
  */
  const [messaggioRound,setMessaggioRound]= useState('');
  /** 
  * Verifica se l'utente ha vinto o meno
  * @type {[Boolean,Function]}
  */
  const [vittoriaRound,setVittoriaRound]= useState(false);

  const inizio = ()=>{
    /**
     * questa funzione permette di mescolare il mazzo o di resettaelo
     * @type {Function}
     */
    const mescola=[...carte].sort(() => 0.5 - Math.random());
    /**
     * permette di estrarre 3 carte casualmente e di metterle in ordine crescente grazie
     * all'operatore sort che paragona i primi due punteggi estratti e verifica ik maggiore
     * ed il minore 
     * @type {Function}
     */
    const giocatoreIniziale = mescola.slice(0, 3).sort((a, b) => a.score - b.score);
    const restante = mescola.slice(3);
    setCarteGiocatore(giocatoreIniziale);
    setMazzo(restante);
    setErrore(0);
    
    /**
     * avvia il round facendo partire la partita 
     * @type {Function}
     */
    setupRound(restante, giocatoreIniziale, 0);
  }
  /**
   * sancisce la vittoria la scofitta o se la partita è terminata attraverso il controllo
   * del numero di carte in mano, degli errori commessi e delle carte rimaste nel mazzo
   * @type {function}}
   */
const setupRound = (mazzoCorrente, manoCorrente, erroriCorrenti) => {
    if (manoCorrente.length >= 6) {
      setRoundMessage('👑 Vittoria! Hai collezionato 6 sfortune posizionate alla perfezione!');
      setStatoGioco('GAME_OVER');
      return;
    }
    if (erroriCorrenti >= 3) {
      setMessaggioRound('💥 Game Over! Hai commesso 3 errori di valutazione.');
      setStatoGioco('GAME_OVER');
      return;
    }
    if (mazzoCorrente.length === 0) {
      setMessaggioRound('Mazzo Esaurito! Partita terminata.');
      setStatoGioco('GAME_OVER');
      return;
    }

  }

  return <View />;
}

/**
 * Stili dell'app
 */
const styles = StyleSheet.create({});