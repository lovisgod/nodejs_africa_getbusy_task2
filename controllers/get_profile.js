const { getprofile } = require('../utils/api');

const get_profile = async (req, res) => {
    try{
      const details = await getprofile();
      if (details === 'No user profile found') { 
          res.status(400).send(details);
         }
      const { name, address, email, username, phone, website, company } = JSON.parse(details);
      const useraddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
      res.status(200);
      res.render('user', { title: 'Profile', name, username, email, phone, website, company, useraddress });
    }catch(e) {
      res.status(500);
    }
  };

  module.exports = { get_profile };
