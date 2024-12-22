import vue from './../assets/vue.png'
import css from './../assets/css.png'
import django from './../assets/django.png'
import javascript from './../assets/javascript.png'
import python from './../assets/python.png'
import react from './../assets/react.png'
import html from './../assets/html.png'

export function getSkillImage(skillName) {
  switch (skillName) {
    case "vue": return vue
    case "css": return css
    case "django": return django
    case "javascript": return javascript
    case "python": return python
    case "react": return react
    case "html": return html
    default: return null
  }
}