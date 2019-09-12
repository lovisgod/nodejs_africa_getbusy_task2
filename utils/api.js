const rp = require('request-promise');

let profile;
const getprofile = async () => {
    try{
      await rp('http://www.somaku.com/users/1', (err, res) => {
        if (err) profile = 'No user profile found';    
        profile = res.body
      });
    }catch(e){
     console.log(err);
     profile = 'No user profile found';
    }
  return profile;
}

module.exports = { getprofile };
