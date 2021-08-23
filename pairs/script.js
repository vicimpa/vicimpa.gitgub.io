; (() => {
  /** @type {HTMLDivElement} */
  const fieldContainer = document.getElementById('field')

  // Иконки
  const icons = [
    'about-dot-me',
    'addthis',
    'adguard',
    'adobecreativecloud',
    'airbnb',
    'anchor',
    'angular',
    'ansible',
    'apacheopenoffice',
    'appveyor',
    'artstation',
    'asciidoctor',
    'azurepipelines',
    'baidu',
    'beatsbydre',
    'blogger',
    'bootstrap',
    'bower',
    'buzzfeed',
    'co-op',
    'creativecommons',
    'dailymotion',
    'deepin',
    'digitalocean',
    'elasticstack',
    'fedora',
    'figma',
    'filezilla',
    'fujitsu',
    'gnusocial',
    'go',
    'godotengine',
  ]

  // Игровое состояние
  /** @type {[number, number]} */
  const step = []
  /** @type {Map<number, boolean>} */
  const opens = new Map()
  const count = 32
  const map = new Uint8Array(count * 2)

  // Генерация карты
  for (let i = 0; i < count; i++)
    map[i * 2] = map[i * 2 + 1] = i

  map.sort(() => Math.random() > .5 ? 1 : -1)

  // Инициализации карты на элементах
  for (const _ of map)
    fieldContainer.appendChild(
      document.createElement('div'))

  // Функция для кликов
  function runStep(i = 0) {
    if (step.length == 2) {
      const [i, j] = step

      if (map[i] != map[j]) {
        opens.set(i, false)
        opens.set(j, false)
      }

      step.splice(0)
    }
    
    if (i < 0 || i >= map.length) return
    if (step.indexOf(i) != -1) return
    if (opens.get(i)) return

    step.push(i)
    opens.set(i, true)
  }

  // Ну тут обработка кликов
  addEventListener('click', ({ target }) => {
    if (
      target instanceof HTMLDivElement &&
      target.parentElement == fieldContainer
    ) {
      /** @type {HTMLDivElement[]} */
      const array = [...document.querySelectorAll('#field > div')]
      const index = array.indexOf(target)

      runStep(index)

      for (let i = 0; i < array.length; i++) {
        if (opens.get(i)) {
          array[i].setAttribute('data-open', '')
          array[i].innerHTML = `<i class="icon-${icons[map[i]]}"></i>`
        } else {
          array[i].removeAttribute('data-open')
          array[i].innerHTML = ''
        }
      }
    }
  })
})()