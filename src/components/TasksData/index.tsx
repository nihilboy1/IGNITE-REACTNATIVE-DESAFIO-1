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

  function addNewTask() {
    setTasks([
      ...tasks,
      {
        id: uuid.v4(),
        content: taskText,
        available: false
      }
    ])

    setTaskText('')
    setCreatedTasksNumber(oldState => {
      return oldState + 1
    })
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
          <Text style={S.numberText}>0</Text>
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
          />
        )}
      />
    </>
  )
}
