import { useState } from 'react'
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import uuid from 'react-native-uuid'
import { NoTasks } from '../NoTasks'
import { Task } from '../Task'
import { S } from './styles'

interface TaskProps {
  id: string | number[]
  content: string
  available: boolean
}

export function TasksData() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskText, setTaskText] = useState('')
  const [createdTasksNumber, setCreatedTasksNumber] = useState(0)
  const [doneTasksNumber, setDoneTasksNumber] = useState(0)

  function addNewTask() {
    if (taskText !== '') {
      setTasks([
        ...tasks,
        {
          id: uuid.v4(),
          content: taskText,
          available: true
        }
      ])

      setTaskText('')
      setCreatedTasksNumber(oldState => {
        return oldState + 1
      })
    }
  }
  function AvailableTasksCounter() {
    let doneTasksCounter = 0
    for (let i in tasks) {
      if (!tasks[i].available) {
        doneTasksCounter += 1
      }
    }
    setDoneTasksNumber(doneTasksCounter)
  }
  function handleRemoveTask(id: string) {
    const newFilteredTasks = tasks.filter(task => {
      if (id === task.id) {
        return
      }
      return task
    })

    setTasks(newFilteredTasks)
    AvailableTasksCounter()
    setCreatedTasksNumber(oldState => {
      return oldState - 1
    })
  }
  function changeCheckedState(id: string) {
    const tasksWithNewAvailableList = tasks.map(task => {
      if (task.id === id) {
        task.available = !task.available
        return task
      }
      return task
    })
    setTasks(tasksWithNewAvailableList)
    AvailableTasksCounter()
  }

  return (
    <>
      <View style={S.inputContainer}>
        <TextInput
          style={S.textInput}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskText}
          value={taskText}
        />
        <TouchableOpacity style={S.addTaskButton} onPress={addNewTask}>
          <Image source={require('../../../assets/plus.png')} />
        </TouchableOpacity>
      </View>
      <View style={S.container}>
        <View style={S.dataContainer}>
          <Text style={S.textInputCreated}>Criadas</Text>
          <Text style={S.numberText}>{createdTasksNumber}</Text>
        </View>
        <View style={S.dataContainer}>
          <Text style={S.textInputCompleted}>Concluídas</Text>
          <Text style={S.numberText}>{doneTasksNumber}</Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <NoTasks />}
        renderItem={({ item }) => (
          <Task
            available={item.available}
            content={item.content}
            id={item.id.toString()}
            changeCheckedState={changeCheckedState}
            handleRemoveTask={handleRemoveTask}
          />
        )}
      />
    </>
  )
}
