let todoList = $('.todoList')

$('#addTodo').click(function () {
  let todoList = $('.todoList')
  let text = $('#todos').val()
  let pValue = `<p>` + text + `</p>`
  let addTodo = $(
    `<div class="todo">` +
      pValue +
      `
      <div class="buttons">
        <button class="checked">
          <i class="fa-solid fa-check"></i>
        </button>
        <button class="remove">
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>`
  )
  if (text.length > 0) {
    todoList.append(addTodo)
  }

  localStorage.setItem('addedTodo', todoList.html())
  console.log(localStorage)
  let x = localStorage.getItem('addedTodo')
  todoList.html(x)
  $('.remove').click(function (e) {
    $(e.target).closest('.todo').hide()
    localStorage.setItem('addedTodo', todoList.html())
  })
  $('.checked').click(function (e) {
    $(e.target).closest('.todo').css({
      opacity: '0.6',
      transition: '0.5s',
      'text-decoration': 'line-through'
    })

    localStorage.setItem('addedTodo', todoList.html())
  })
})
let x = localStorage.getItem('addedTodo')
todoList.html(x)

$('.remove').click(function (e) {
  $(e.target).closest('.todo').hide()
  localStorage.setItem('addedTodo', todoList.html())
})

$('.checked').click(function (e) {
  $(e.target).closest('.todo').css({
    opacity: '0.6',
    transition: '0.5s',
    'text-decoration': 'line-through'
  })

  localStorage.setItem('addedTodo', todoList.html())
})
