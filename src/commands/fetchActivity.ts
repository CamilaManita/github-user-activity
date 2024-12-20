import githubService from '../services/githubService';
let displayActivity: any;
import handleError from '../utils/errorHandler';

const fetchActivity = async (username: string, eventType: string | null, limit: number): Promise<void> => {
    try {
        console.log(`🔍 Buscando actividad reciente de: ${username}`);
        const events = await githubService.getUserEvents(username);

        if (events.length === 0) {
            console.log('⚠️ No se encontró actividad reciente.');
            return;
        }

        if (!displayActivity) {
            displayActivity = (await import('../models/eventModel.mjs')).default;
        }
        console.log(`🎯 Actividad reciente${eventType ? ` (Filtrado por: ${eventType})` : ''}:`);
        displayActivity(events, eventType, limit);
    } catch (error) {
        handleError(error as Error);
    }
};

export default fetchActivity;
