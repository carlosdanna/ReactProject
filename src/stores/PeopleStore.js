'use strict';

import {dispatch, register} from '../dispatchers/PeopleDispatcher';
import PeopleConstants from '../constants/PeopleConstants';
import {EventEmitter} from 'events';
import PeopleModel from './models/PeopleModel';

const CHANGE_EVENT ='change';

const PeopleStore = object.assign(EventEmitter.prototype,{
  emitChange(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener( callback ){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener( callback ){
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: register(function(action){
    switch(action.actionType){
      case PeopleConstants.clearAll:
      PeopleModel.clearAll()
    }
  })

})

const instance = new PeopleStore(dispatcher);
export default instance;
