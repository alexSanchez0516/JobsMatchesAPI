const { response } = require('express');
const fetch = require("node-fetch");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getOfferts = async (req, res) => {
    try {
        const response = await fetch(
            `https://api.infojobs.net/api/9/offer?category=administracion-empresas`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Basic MDA0NDc5MDM5YTAzNDZjY2I3MDE0NWRmNWYyYTMwMmI6RFBLSWMzbENrV1NNb012QU9PT1pQSEhzRVpodFFTU0hBVG40V1ErdEpRTm15VUYyYzE=`,
              },
            }
          );
        
          const data = await response.json();
          return res.status(200).json({
            data
        });
          
    } catch (error) {
        return res.status(500).json({
            data: [],
        });
    }
}

const getOffertsSegmenteds = async (req, res) => {
    try {
        const response = await fetch(
            `https://api.infojobs.net/api/9/offer?category=administracion-empresas`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Basic MDA0NDc5MDM5YTAzNDZjY2I3MDE0NWRmNWYyYTMwMmI6RFBLSWMzbENrV1NNb012QU9PT1pQSEhzRVpodFFTU0hBVG40V1ErdEpRTm15VUYyYzE=`,
              },
            }
          );
        
          const data = await response.json();
          return res.status(200).json({
            data
        });
          
    } catch (error) {
        return res.status(500).json({
            data: [],
        });
    }
}



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getCategorys = async (req, res) => {
    try {
        const response = await fetch(
            `https://api.infojobs.net/api/9/offer?category=administracion-empresas`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Basic MDA0NDc5MDM5YTAzNDZjY2I3MDE0NWRmNWYyYTMwMmI6RFBLSWMzbENrV1NNb012QU9PT1pQSEhzRVpodFFTU0hBVG40V1ErdEpRTm15VUYyYzE=`,
              },
            }
          );
        
          const data = await response.json();
          return res.status(200).json({
            data
        });
          
    } catch (error) {
        return res.status(500).json({
            data: [],
        });
    }
}



module.exports = {
    getOfferts,
    getCategorys,
    getOffertsSegmenteds
}