/**
 * 
 * The class represents data object.
 * 
 * @author Walber Antonio Ramos Beltrame (walber.beltrame@gmail.com)
 * 
 */

 /**
  * 
  * The final class as struct of attributes for persisting note.
  * 
  */
 export default class Note {

  /**
   * 
   * @param {int} id 
   * @param {string} text 
   */
  constructor (id, text) {
   this._id = id;
   this._text = text;
  }

   /**
    * @returns {int} id
    */
   get id() {
    return this._id;
   }

   /**
     * @param {string} text
     */
    set text(text) {
     this._text = text;
   }

   /**
    * @returns {string} text
    */
   get text() {
    return this._text;
   }

 }