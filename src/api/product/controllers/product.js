// 'use strict';

/**
 *  product controller
 */
 const toEmail = process.env.TOEMAIL;
 const welcome = process.env.WELCOME;
 
 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',(strapi)=>({
    async create(ctx) {
    console.log(ctx.request.body)
    //{	"name": "A head phone",	"price": 2000}
        let entity;
        console.log("error here placing")
        // if (ctx.is('multipart')) {
        //     console.log("multipart")
        //   const files  = null;
        //   const data = ctx.request.body;
        //   console.log(data)
        //   console.log(strapi)
        //   entity = await strapi.strapi.service('api::sendmail.sendmail').add(data, { files });
        //   console.log(strapi.strapi.services)
        // } else {
        //   entity = await strapi.strapi.service('api::sendmail.sendmail').add(ctx.request.body);
        // }
        console.log(strapi.strapi.service('api::sendmail.sendmail').send)
        try{
          console.log("toEmail1")
           strapi.strapi.service('api::sendmail.sendmail').send(welcome, toEmail, 'Welcome', `A product has been created `);
            console.log("toEmail2")
            return welcome; 
        }
        catch(err){
            console.log("InCatch")
        }
        
        console.log("error here placing")
        return "mail";
      }
}));


