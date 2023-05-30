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
      let url = 'https://api.infojobs.net/api/9/offer';
      oneParameter = true;

      if (req.query.q) {
        if (oneParameter) {
          url += '?q=' + req.query.q;
        } else {
          url += '&q=' + req.query.q;
  
        }
        oneParameter = false;
      }
  
      if (req.query.category) {
        if (oneParameter) {
          url += '?category=' + req.query.category;
        } else {
          url += '&category=' + req.query.category;
  
        }
        oneParameter = false;
      }

      if (req.query.province) {
        if (oneParameter) {
          url += '?province=' + req.query.province;
        } else {
          url += '&province=' + req.query.province;
  
        }
        oneParameter = false;
      }

      if (oneParameter) {
        url += '?page=' + req.query.page;
      } else {
        url += '&page=' + req.query.page;
      }

      console.log(url);
      oneParameter = false;

        const response = await fetch(
            url,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Basic MDA0NDc5MDM5YTAzNDZjY2I3MDE0NWRmNWYyYTMwMmI6RFBLSWMzbENrV1NNb012QU9PT1pQSEhzRVpodFFTU0hBVG40V1ErdEpRTm15VUYyYzE=`,
              },
            }
          );
        
          const data = await response.json();

          const { items, totalPages } = data;
          return res.status(200).json({
            items,  totalPages
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
            `https://api.infojobs.net/api/1/dictionary/category`,
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
const getAnyDictionary = async (req, res) => {
  try {
      if (!req.params.dictionary) {
        return res.status(404).json({});
      }

      const response = await fetch(
          `https://api.infojobs.net/api/1/dictionary/${req.params.dictionary}`,
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
const getCitysByFrom = async (req, res) => {
  try {
      const response = await fetch(
          `https://api.infojobs.net/api/1/dictionary/province?parent=17`,
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
    getCitysByFrom,
    getAnyDictionary
}