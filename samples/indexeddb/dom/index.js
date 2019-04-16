/**
 * 
 * 
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

import Note from "../../data/note";
import * as Molded from "../../../dist/molded";

  /**
   * 
   */
  class NoteMoldeled extends Modeled {

    /**
     * @returns {Note} note
     */
    get note() {
      return this._note;
    }

    /**
     * @param {Note} note
     */
    set note(note) {
      this._note = note;
    }

    /**
      * 
      */
    constructor (note) {
      // TODO
      this._note = note;
    }

  }

  class NoteViewed extends Viewed {

    constructor() {
      // TODO
      // this.On = new On(function(resolve, reject) {
      //});
    }

  }