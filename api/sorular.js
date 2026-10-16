// vercel: /api/sorular
import { soruUret } from '../sunucu/soru-uret.js';

export function POST(istek) {
    return soruUret(istek, process.env);
}
