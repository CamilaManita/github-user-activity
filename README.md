# GitHub Activity CLI

https://roadmap.sh/projects/github-user-activity

`github-activity` is a command-line application that allows you to query a user's recent activity on GitHub. It uses the GitHub API to fetch events such as commits, issues, stars, and more, displaying the information in an organized manner in the terminal.

## **Requirements**

- Node.js installed on the system.
- The application is run from the command line.
- Only the GitHub API is used to fetch the data.
- No external libraries are used to make HTTP requests.
- Handles errors and edge cases appropriately.

---

## **Features**

1. **View Recent Activity**: Displays the most recent activity of a GitHub user.
2. **Filter by Event Type**: Allows you to filter events by type (`PushEvent`, `IssuesEvent`, etc.).
3. **Pagination Control**: You can specify how many events you want to display.
4. **Rich Formatting**: Output is displayed in color-coded tables for improved readability.
5. **Error Handling**: Detects invalid users, network issues, or API errors.

---

## **Installation**

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/CamilaManita/github-activity
2. Navigate to the project directory:
   ```bash
   cd github-activity
3. Make sure you have Node.js installed on your system. You can check this with:
   ```bash
   node -v
4. Install the required dependencies:
   ```bash
   npm install
5. Compile the TypeScript code to JavaScript:
   ```bash
   npm run build
6. Install the CLI globally:
   ```bash
   npm install -g .

## **Usage**

### **Available Commands**

- View Recent Activity:
   ```bash
   github-activity <username>

- Filter by event type
   ```bash
   github-activity <username> <eventType>

- Control Pagination:
   ```bash
   github-activity <username> <eventType> <limit>

## **Supported Event Types**
- `PushEvent`: Commits made by the user.
- `IssuesEvent`: Creation or modification of issues.
- `WatchEvent`: Events related to stars in repositories.
- `CreateEvent`: Creation of new repositories.

## **Examples**

1. **Check General Activity**
   ```bash
   github-activity camilamanita
   ```
   #### **Expected Output**
   ```plaintext
   🔍 Buscando actividad reciente de: camilamanita
   🎯 Actividad reciente:
   +----+--------------+-----------------------------+
   | N° | Evento       | Repositorio                 |
   +----+--------------+-----------------------------+
   | 1  | PushEvent    | camilamanita/my-repo        |
   | 2  | IssuesEvent  | camilamanita/another-repo   |
   +----+--------------+-----------------------------+
   ```

2. **Filter by Event Type**
   ```bash
   github-activity camilamanita PushEvent
   ```
   #### **Expected Output**
   ```plaintext
   🔍 Buscando actividad reciente de: camilamanita
   🎯 Actividad reciente (Filtrado por: PushEvent):
   +----+--------------+-----------------------------+
   | N° | Evento       | Repositorio                 |
   +----+--------------+-----------------------------+
   | 1  | PushEvent    | camilamanita/my-repo        |
   | 2  | PushEvent    | camilamanita/another-repo   |
   +----+--------------+-----------------------------+
   ```

3. **Control Pagination**
   ```bash
   github-activity camilamanita PushEvent 3
   ```
   #### **Expected Output**
   ```plaintext
   🔍 Buscando actividad reciente de: camilamanita
   🎯 Actividad reciente (Filtrado por: PushEvent):
   +----+--------------+-----------------------------+
   | N° | Evento       | Repositorio                 |
   +----+--------------+-----------------------------+
   | 1  | PushEvent    | camilamanita/my-repo        |
   | 2  | PushEvent    | camilamanita/another-repo   |
   | 3  | PushEvent    | camilamanita/example-repo   |
   +----+--------------+-----------------------------+
   ```

## **Error Handling**
The CLI is designed to handle common errors:

- Non-existent or Invalid User:
   ```plaintext
   ❌ Hubo un problema al comunicarse con la API de GitHub.
   ```
- Network Problems:
   ```plaintext
   ❌ No se pudo establecer la conexión a internet.
   ```
- No Recent Activity:
   ```plaintext
   ⚠️ No se encontró actividad reciente.
   ```

## **Contributions**
Contributions are welcome. If you have suggestions or improvements, feel free to open a pull request or an issue in the repository.

## **Licencia**
This project is licensed under the MIT license.