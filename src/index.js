import './style.scss'
import './js/map'

// form validation

document.addEventListener("DOMContentLoaded", function (e) {

  const form = document.querySelector('form')
  const name = document.getElementById('formName')
  const phone = document.getElementById('formPhone')
  const error = document.getElementsByClassName('error')

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const err = {
      'phone': {
        'msg': 'Неверный формат номера',
        'pattern': /^([+]?[0-9\s-\(\)]{5,25})*$/
      },
      'name': {
        'msg': 'Введите Ваше реальное имя',
        'pattern': /[\sа-яА-ЯЁё]{2,20}/ug,
      },
      'required': {
        'msg': 'Поле не может быть пустым',
        'pattern': /[\wа-яА-ЯЁё]|\b/ug
      }
    }

    let arr = [name, phone]
    let rules = ['name', 'phone']

    for (let i = 0; i < arr.length; i++) {
      let x = arr[i].value

      if (x === '') {
        console.log(x)
        error[i].style.display = 'block'
        error[i].innerHTML = err.required.msg;
      } else {
        console.log(x)

        let z = err[rules[i]]
        console.log(z)

        if (!z.pattern.test(x)) {
          error[i].style.display = 'block'
          error[i].innerHTML = z.msg
        } else {
          error[i].style.display = 'none'

        }
      }
    }
    name.focus()
  })

})

