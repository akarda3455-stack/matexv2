// netlify: /api/sorular
import { soruUret } from '../../sunucu/soru-uret.js';

export default (istek) => soruUret(istek, process.env);

export const config = { path: '/api/sorular' };
