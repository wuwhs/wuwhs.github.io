// const person = {
//   name: 'ww',
//   age: 18
// }

// const personProxy = new Proxy(person, {
//   get(target, property) {
//     console.log('get target: ', target)
//     console.log('get property: ', property)
//     return property in target ? target[property] : undefined
//   },
//   set(target, property, value) {
//     console.log('set target: ', target)
//     console.log('set property: ', property)
//     console.log('set value: ', value)
//     if (property === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError(`${value} must be a integer`)
//       }
//       target[property] = value
//     }
//   }
// })

// console.log(personProxy.name)
// personProxy.name = 'wuwhs'
// const person = {}

// let v = 'www'
// Object.defineProperty(person, 'age', {
//   enumerable: true,
//   configurable: true,
//   get() {
//     console.log('def get value: ')
//     return v
//   },
//   set(value) {
//     console.log('def set value: ', value)
//     v = value
//   }
// })

// person.age = 18
// console.log('person.name: ', person.age)

// const raw = []
// const arr = new Proxy(raw, {
//   get(target, key) {
//     console.log('get: ', key)
//     return Reflect.get(target, key)
//   },
//   set(target, key, value) {
//     console.log('set: ', key)
//     return Reflect.set(target, key, value)
//   }
// })
// arr.push(2)
