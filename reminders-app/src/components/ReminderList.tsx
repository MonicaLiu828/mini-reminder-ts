import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}
function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li className="list-group-item" key={item.id}>
            {item.title}
            <button
              onClick={() => {
                onRemoveReminder(item.id);
              }}
              className="button btn btn-outline-danger mx-2"
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ReminderList;
