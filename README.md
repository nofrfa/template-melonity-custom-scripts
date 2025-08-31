# Melonity Custom Scripts

![Node.js](https://img.shields.io/badge/Node.js-22.x%2B-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-blue)
![Build Status](https://img.shields.io/badge/Build-Watch-yellow)

Базовый шаблон для разработки кастомных скриптов под **[Melonity](https://melonity.gg)**.<br>
В репозитории также присутствует пример скрипта `src/example.ts`

---

## 📋 Требования
- [Node.js LTS](https://nodejs.org/en/download) (рекомендуется последняя версия LTS, например 22.x)
- Любой редактор кода (WebStorm, VS Code и т.д.)

---

## ⚡ Установка и запуск

```bash
git clone https://github.com/nofrfa/template-melonity-custom-scripts
cd "template-melonity-custom-scripts"
```
или используйте кнопку "Use this template" на GitHub.

### Установка зависимостей
```bash
npm install
```

### Компиляция
```bash
npm run watch
```

## 💡 Примечание

**В лаунчере необходимо включить:**<br>
`Settings -> Scripts -> Load local scripts`

**В `webpack.config.js` можно изменить путь сборки:**
#### **Старый лаунчер**  
```js
path.resolve(process.env.APPDATA, "Melonity", "scripts")
```
#### **Новый лаунчер**
```
...\launcher_files\melonity_dota2\scripts
```

**_❗ При обновлении скриптов в `/scripts`, будет выполнена автоматическая перезагрузка скриптов_**<br>