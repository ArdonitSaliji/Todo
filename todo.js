let todoList = $('.todoList')

$('#addTodo').click(function () {
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
  $('.checked').click(function (e) {
    $(e.target).closest('.todo').css({ opacity: '0.6', transition: '0.5s' })
  })
  $('.remove').click(function (e) {
    $(e.target).closest('.todo').hide()
  })
})

$('.checked').click(function (e) {
  $(e.target).closest('.todo').css({ opacity: '0.6', transition: '0.5s' })
})
$('.remove').click(function (e) {
  $(e.target).closest('.todo').hide()
})
