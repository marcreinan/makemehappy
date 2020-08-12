/**
 * Constantes de entrada para receber as váriaveis de ambiente, 
 * ou definir valores padrão, caso as váriaveis não estejam setadas
 */

export const APP_NAME     = process.env.APP_NAME     
                            || 'Make Me Happy';

export const APP_SUBNAME  = process.env.APP_SUBNAME  
                            || 'Conte piadas e faça uma SPA feliz';

export const APP_TITLE    = process.env.APP_TITLE 
                            || '.:: Make Me Happy';

export const PORT         = process.env.PORT      
                            || '3000';

export const API_URI      = process.env.API_URI   
                            || 'https://geek-jokes.sameerkumar.website/api';