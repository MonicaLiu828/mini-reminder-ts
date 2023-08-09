import axios, { AxiosResponse } from "axios";
import Reminder from "../models/reminder";

// another way to write axios calling api part
class ReminderService {
  getReminders = function () {
    var promise = new Promise<Reminder[]>((resolve, reject) => {
      axios
        .get("http://jsonplaceholder.typicode.com/todos")
        .then((res: AxiosResponse<Reminder[]>) => {
          console.log("test", res);
          resolve(res.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
    return promise;
  };
}
const reminderService = new ReminderService();
export default reminderService;
