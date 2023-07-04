const LOG_ACTIVE = true;

export default function CustomConsole(params) {
  const { origin, type = "log", info = "" } = params;

  let logMessage = `[${new Date().toISOString()}] origin: ${origin}\n`;

  /*if (typeof info === 'string' || info instanceof String) {
    logMessage += `info: ${info}\n`;
  } else if (Array.isArray(info)) {
    logMessage += `info: {\n${info.map((item) => `${JSON.stringify(item)}`).join('\n')}\n}`;
  } else if (typeof info === 'object') {
    logMessage += `info:{ \n${Object.entries(info).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}\n}`;
  }*/

  if (LOG_ACTIVE) {
    switch (type) {
      case "warn":
        console.warn(logMessage, info);
        break;
      case "error":
        console.error(logMessage, info);
        break;

      default:
        console.log(logMessage, info);
        break;
    }
  }
}
