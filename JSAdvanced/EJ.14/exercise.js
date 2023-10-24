function uncompletedNotes(givenArray) {
  let result = givenArray.forEach(filterFunc)                 //a cada elemento del array le aplico la funcion FilterFunc. El array tiene 2 objetos, Workout y Front-end
  function filterFunc(activity){                              //la funcion FilterFunc empieza aqui
    let undoneTodos = activity.todos.forEach(filterFalse)     //la funcion FilterFunc consiste en acceder al ARRAY que esta en la key "todos" en cada objeto, y dentro de dicho array aplicar la funcion filterFalse
    function filterFalse(todos){                              //la funcion FilterFalse empieza aqui
      return todos.done === false                             //la funcion FilterFalse devuelve aquellos objetos en el array "todos" cuya key "done" este establecida como boolean false
    }
    return undoneTodos
  }
  console.log(result)       //por algun motivo, el resultado da undefined.
}

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

uncompletedNotes(notes);
