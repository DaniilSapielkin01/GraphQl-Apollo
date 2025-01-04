import { Checkbox, Text, CloseButton, HStack } from "@chakra-ui/react";

const TodoItem = ({ id, title, completed, toggleTodo, removeTodo }) => {
  return (
    <HStack spacing={3}>
      <Checkbox
        checked={completed}
        onChange={() =>
          toggleTodo({
            variables: {
              id,
              completed: !completed,
            },
          })
        }
      />
      <Text>{title}</Text>
      <CloseButton
        onClick={() =>
          removeTodo({
            variables: {
              id,
            },
          })
        }
      />
    </HStack>
  );
};

export default TodoItem;
