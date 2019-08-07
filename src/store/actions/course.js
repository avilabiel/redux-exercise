export function toggleLesson(module, lesson) {
  return {
      type: 'TOGGLE_LESSON',
      module,
      lesson
  }
}

export function changeLesson4(module, lesson) {
  return {
    type: 'CHANGE_LESSON4',
    module,
    lesson
  }
}