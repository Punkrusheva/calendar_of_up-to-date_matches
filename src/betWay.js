import betWay from '@betting-api/betway'
import secret_key from './config';

export default async function BetWay() {
   
   betWay.registerApp({
        secret_key: secret_key,
   });
     
   const prematchList = await betWay.football.getPreMatchAll()
          
   return  await prematchList;
};
