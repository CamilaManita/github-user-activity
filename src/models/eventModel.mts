import chalk from 'chalk';
import Table from 'cli-table3';



interface GitHubEvent {
    type: string;
    repo: {
        name: string;
    };
    payload: any;
}

const displayActivity = (events: GitHubEvent[], eventType: string | null, limit: number): void => {
    const filteredEvents = eventType
        ? events.filter((event) => event.type === eventType)
        : events;

    if (filteredEvents.length === 0) {
        console.log(chalk.yellow(`⚠️ No se encontraron eventos del tipo: ${eventType}`));
        return;
    }

    const table = new Table({
        head: [chalk.green('N°'), chalk.blue('Evento'), chalk.magenta('Repositorio')],
    });

    filteredEvents.slice(0, limit).forEach((event, index) => {
        const { type, repo } = event;
        table.push([index + 1, chalk.cyan(type), chalk.yellow(repo.name)]);
    });

    console.log(table.toString());
};

export default displayActivity;
