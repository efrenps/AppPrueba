/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	Name:{
  		type: 'string',
  		required: true
  	},
  	Lastname:{
  		type: 'string'
  	},
  	Email:{
  		type: 'string',
  		email: true,
  		required: true,
  		unique: true
  	},
  	EncryptedPassword:{
  		type: 'string'
  	}
    
  }

};
