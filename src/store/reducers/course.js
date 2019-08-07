const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando as aulas',
      lessons: [
        {id: 1, title: 'Primeira aula'},
        {id: 2, title: 'Segunda aula'},
      ]
    },
    {
      id: 2,
      title: 'Apredendo React',
      lessons: [
        {id: 3, title: 'Terceira aula'},
        {id: 4, title: 'Quarta aula'},
      ]
    }
  ]  
}


export default function course(store = INITIAL_STATE, action) {

  if (action.type === 'TOGGLE_LESSON')
    return  {...store, activeLesson: action.lesson, activeModule: action.module}

  return store
}