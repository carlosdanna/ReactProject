'use strict';

import PeopleConstants from './../constants/PeopleConstants';
import {dispatch, register} from './../dispatchers/PeopleDispatcher';

export default {
  clearAll(item){
    dispatch({
      actionType: PeopleConstants.CLEAR_ALL,
    })
  },

  deletePeople(item){
    dispatch({
        actionType: PeopleConstants.DELETE_PEOPLE,
        item: item
      })
    },

  addPeople(item){
    dispatch({
      actionType: PeopleConstants.ADD_PEOPLE,
      item: item
    })
  },

  // getPeople(){
  //   dispatch({
  //     actionType: PeopleConstants.GET_PEOPLE.
  //     item: {}
  //   })
  // },

  updatePeople(item){
    disppatch({
      actionType: PeopleConstants.UPDATE_PEOPLE,
      item: item
    })
  },

  verifyEmail(item){
    dispatch({
      actionType: PeopleConstants.VERIFY_EMAIL,
      item: item
    })
  }
}
