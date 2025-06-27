import { useState } from "react";
import Card from "../components/card";
import InputText from "../components/input-text";
import ButtonIcon from "../components/button-icon";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";

import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTasking() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {isEditing ? (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTasking}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      ) : (
        <>
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      )}
    </Card>
  );
}
