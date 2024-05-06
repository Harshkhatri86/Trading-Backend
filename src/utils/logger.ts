import dayjs from "dayjs";
import pino , {LoggerOptions} from "pino";

const option : LoggerOptions = {
    base: {
        pid:false
    }, 
    timestamp : () => `time : ${dayjs().format()}`
}

const log = pino(option)

export default log ; 