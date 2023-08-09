import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "./services/reminder2";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = () => {
    ReminderService.getReminders()
      .then((reminders: Reminder[]) => {
        setReminders(reminders);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const removeReminder = (id: number) => {
    setReminders(
      reminders.filter((reminder) => {
        return reminder.id !== id;
      })
    );
  };

  const addReminder = (title: string) => {
    ReminderService.addReminder(title)
      .then((res) => {
        console.log("success");
        setReminders([res, ...reminders]);
      })
      .catch((error: any) => {
        console.log("failed");
        console.error(error);
      });
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder}></NewReminder>
      <ReminderList
        items={reminders}
        onRemoveReminder={removeReminder}
      ></ReminderList>
    </div>
  );
}

export default App;
